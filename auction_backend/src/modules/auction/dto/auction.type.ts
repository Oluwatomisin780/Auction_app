export class createAuction {
  name: string;
  image: string;
  startingPrice: number;
  description: string;
  startDate: Date;
  endDate: Date;
}

export class UpdateAuction {
  name?: string;
  image?: string;
  startingPrice?: number;
  description?: string;
  startDate?: Date;
  endDate?: Date;
}
