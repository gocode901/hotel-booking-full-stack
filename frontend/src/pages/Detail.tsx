import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "./../api-client";
import { AiFillStar } from "react-icons/ai";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";

const Detail = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  if (!hotel) {
    return <></>;
  }

  return (
    <div className="">
      <div>
      <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
        <span className="flex mb-2">
          {Array.from({ length: hotel.starRating }).map(() => (
            <AiFillStar className="fill-yellow-400" />
          ))}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {hotel.imageUrls.map((image) => (
          <div className="mb-10">
            <img
              src={image}
              alt={hotel.name}
              className="rounded-md w-600px h-600px object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-row">
        <div className="mr-5 ">Facilities: </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {hotel.facilities.map((facility) => (
          <div className="border border-slate-300 rounded-sm p-3">
            {facility}
          </div>
        ))}
      </div>
      </div>

      <div className="flex flex-col mt-10">
        <div>More about the hotel: </div>
        <div className="whitespace-pre-line mb-10 mt-4 border border-gray-400 rounded p-2">{hotel.description}</div>
        <div className="h-fit">
          <GuestInfoForm
            pricePerNight={hotel.pricePerNight}
            hotelId={hotel._id}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
