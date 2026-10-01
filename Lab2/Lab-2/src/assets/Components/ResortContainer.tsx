import ResortCard from "./ResortCard";
import type { ResortListing } from "./Data/data";

interface ResortListingProp {
  listings: ResortListing[];
}

export default function ResortContainer({ listings }: ResortListingProp) {
  return (
    <div className="ResortContainer">
      {listings.map((listing) => (
        <ResortCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}
