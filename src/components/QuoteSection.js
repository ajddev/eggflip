import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function QuoteSection() {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />I bet you think an egg is
        something you casually order for breakfast when you can't think of
        anything else. Well, so did I once, but that was before the egg and I.
      </p>
      <p className="quote-author">- Claudette Colbert</p>
    </div>
  );
}
