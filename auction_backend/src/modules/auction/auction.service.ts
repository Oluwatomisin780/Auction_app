import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma/prisma.service';
import { createAuction, UpdateAuction } from './dto/auction.type';
@Injectable()
export class AuctionService {
  constructor(private prismaService: PrismaService) {}
  async createAuction(createAuction: createAuction) {
    return await this.prismaService.auction.create({
      data: createAuction,
    });
  }
  async getAuctionById(id: string) {
    return await this.prismaService.auction.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getAllAuctions() {
    return await this.prismaService.auction.findMany();
  }

  updateAuction(id: string, updateAuction: UpdateAuction) {
    return this.prismaService.auction.update({
      where: {
        id: id,
      },
      data: updateAuction,
    });
  }

  async deleteAuction(id: string) {
    return await this.prismaService.auction.delete({
      where: {
        id: id,
      },
    });
  }

  async getAuctionBids(auctionId: string) {
    return await this.prismaService.bid.findMany({
      where: {
        auctionId: auctionId,
      },
    });
  }
}
