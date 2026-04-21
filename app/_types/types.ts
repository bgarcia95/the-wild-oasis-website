export interface Cabin {
  id: number;
  created_at: Date;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
}

export interface Guest {
  id: number;
  created_at: Date;
  fullName: string;
  emailAddress: string;
  nationalID: null;
  nationality: string;
  countryFlag: null;
}

export interface Booking {
  id: number;
  created_at: Date;
  startDate: Date;
  endDate: Date;
  numNights: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  status: string;
  hasBreakfast: boolean;
  isPaid: boolean;
  observations: string;
  cabinId: number;
  guestId: number;
}

export interface Setting {
  id: number;
  created_at: Date;
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}
