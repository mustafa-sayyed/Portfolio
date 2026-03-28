import { useEffect, useMemo, useState } from "react";
import { CalendarDays } from "lucide-react";
import HorizontalLine from "../components/HorizontalLine";
import Title from "../components/Title";
import { handleClick } from "@/lib/posthog";

const MEDIUM_FEED_URL = "/convert?url=https://medium.com/feed/@mustafasayyed086";

type Article = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  guid: string;
};

type FeedResponse = {
  items?: Array<{
    guid: string;
    url: string;
    title: string;
    content_html: string;
    date_published: string;
  }>;
};

function sanitizeDescription(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getMainImageFromHtml(html: string) {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");
  const images = Array.from(document.querySelectorAll("img"));

  const mainImage = images.find(
    (img) => img.getAttribute("alt")?.trim().toLowerCase() === "main image",
  );

  return mainImage?.getAttribute("src") || "";
}

function formatPublishedDate(date: string) {
  try {
    return new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recently";
  }
}

function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const visibleArticles = useMemo(() => articles.slice(0, 6), [articles]);

  const fetchArticles = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(MEDIUM_FEED_URL);
      if (!response.ok) {
        throw new Error("Could not load articles right now.");
      }

      const data = (await response.json()) as FeedResponse;
      if (!data.items || data.items.length === 0) {
        throw new Error("Feed returned no posts.");
      }

      const normalizedArticles: Article[] = data.items.map((item) => ({
        guid: item.guid,
        title: item.title,
        link: item.url,
        pubDate: item.date_published,
        description: item.content_html,
        thumbnail: getMainImageFromHtml(item.content_html),
      }));

      setArticles(normalizedArticles);
    } catch {
      setError("Could not load articles right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <Title title="Articles" />
          <p className="mt-2 text-lg font-light">
            Thoughts on engineering, product building, and lessons from shipping.
          </p>
        </div>
      </div>

      {isLoading && (
        <div className="mt-8 flex flex-col gap-4">
          {[1, 2, 3, 4].map((key) => (
            <div
              key={key}
              className="rounded-2xl border border-border/80 p-4 bg-card/50 animate-pulse"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="h-40 sm:h-36 sm:w-56 w-full rounded-xl bg-muted/70 shrink-0" />
                <div className="flex-1">
                  <div className="h-6 w-3/4 rounded bg-muted mt-1" />
                  <div className="h-4 w-full rounded bg-muted mt-3" />
                  <div className="h-4 w-5/6 rounded bg-muted mt-2" />
                  <div className="h-4 w-2/5 rounded bg-muted mt-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && error && (
        <div className="mt-8 rounded-2xl border border-destructive/35 bg-destructive/10 p-5">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="mt-8 flex flex-col gap-4">
          {visibleArticles.map((article) => {
            const summary = sanitizeDescription(article.description);
            const preview =
              summary.length > 120 ? `${summary.slice(0, 120)}...` : summary;
            const articleImage = article.thumbnail;

            return (
              <a
                key={article.guid}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:bg-card transition-colors"
                onClick={() => handleClick("article_open")}
              >
                <article className="p-4 flex flex-col sm:flex-row gap-4">
                  <div className="relative overflow-hidden rounded-md bg-linear-to-br from-muted/80 via-muted to-background w-full h-44 sm:w-56 sm:h-36 md:w-64 md:h-40 max-w-full shrink-0">
                    {articleImage ?
                      <img
                        src={articleImage}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    : <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground font-medium">
                        Medium Post
                      </div>
                    }
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold leading-tight">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{preview}</p>

                    <div className="flex items-center text-xs text-muted-foreground gap-2 mt-3">
                      <CalendarDays className="size-4" />
                      <span>{formatPublishedDate(article.pubDate)}</span>
                    </div>
                  </div>
                </article>
              </a>
            );
          })}
        </div>
      )}

      <HorizontalLine />
    </section>
  );
}

export default Articles;
