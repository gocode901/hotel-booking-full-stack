import React, { useContext, useState } from "react";

type SearchContextType = {
  destination: string;
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  hotelId: string;
  rooms: number;
  saveSearchValues: (
    destination: string,
    checkIn: Date,
    checkOut: Date,
    adultCount: number,
    childCount: number,
    rooms: number,
    hotelId?: string
  ) => void;
};

const SearchContext = React.createContext<SearchContextType | undefined>(undefined);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [destination, setDestination] = useState<string>(() => sessionStorage.getItem("destination") || "");
  const [checkIn, setCheckIn] = useState<Date>(() => new Date(sessionStorage.getItem("checkIn") || new Date().toISOString()));
  const [checkOut, setCheckOut] = useState<Date>(() => new Date(sessionStorage.getItem("checkOut") || new Date().toISOString()));
  const [adultCount, setAdultCount] = useState<number>(() => parseInt(sessionStorage.getItem("adultCount") || "1"));
  const [childCount, setChildCount] = useState<number>(() => parseInt(sessionStorage.getItem("childCount") || "1"));
  const [rooms, setRooms] = useState<number>(() => parseInt(sessionStorage.getItem("rooms") || "1"));
  const [hotelId, setHotelId] = useState<string>(() => sessionStorage.getItem("hotelId") || "");

  const saveSearchValues = (
    destination: string,
    checkIn: Date,
    checkOut: Date,
    adultCount: number,
    childCount: number,
    rooms: number,
    hotelId?: string
  ) => {
    setDestination(destination);
    setCheckIn(checkIn);
    setCheckOut(checkOut);
    setAdultCount(adultCount);
    setChildCount(childCount);
    setRooms(rooms);
    if (hotelId) {
      setHotelId(hotelId);
    }

    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("checkIn", checkIn.toISOString());
    sessionStorage.setItem("checkOut", checkOut.toISOString());
    sessionStorage.setItem("adultCount", adultCount.toString());
    sessionStorage.setItem("childCount", childCount.toString());
    sessionStorage.setItem("rooms", rooms.toString());

    if (hotelId) {
      sessionStorage.setItem("hotelId", hotelId);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        destination,
        checkIn,
        checkOut,
        adultCount,
        childCount,
        rooms,
        hotelId,
        saveSearchValues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchContextProvider");
  }
  return context;
};
