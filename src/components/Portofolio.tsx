import LogoProject from "./LogoProject";
import YtThumbnailProject from "./YtThumbnailProject";
import BookProject from "./BookProject";
import SocialMediaProject from "./SocialMediaProject";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 bg-gray-100 dark:bg-gray-400">
      <div className="container mx-auto">
        <SocialMediaProject />
        <YtThumbnailProject />
        <BookProject />
        <LogoProject />
      </div>
    </section>
  );
};

export default Portfolio;
