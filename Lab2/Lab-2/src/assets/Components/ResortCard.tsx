import type { ResortListing } from "./Data/data";

function ratingCheck(rating: number) {
  if (rating >= 4.0)
    return (
      <div className="ratingGreen">
        <p>{rating}★</p>
      </div>
    );
  if (rating <= 4.0)
    return (
      <div className="ratingRed">
        <p>{rating}★</p>
      </div>
    );
}

export default function ResortCard({
  pic,
  country,
  location,
  rating,
  price,
}: ResortListing) {
  return (
    <div className="ResortListing">
      <img className="ResortImage" src={pic} alt="" />
      <p className="country">{country}</p>
      <p className="location">{location}</p>
      <p>{ratingCheck(rating)}</p>
      <p className="price">${price}/night</p>
    </div>
  );
}
