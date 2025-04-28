import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuctionService } from './auction.service';
import { createAuction } from './dto/auction.type';

@Controller('auction')
export class AuctionController {
  constructor(private auctionService: AuctionService) {}

  @Post('create')
  async createAuction(@Body() createAuction: createAuction) {
    return await this.auctionService.createAuction(createAuction);
  }

  @Get('getAll')
  async getAllAuctions() {
    return await this.auctionService.getAllAuctions();
  }
  @Get('getById/:id')
  async getAuction(@Param('id') id: string) {
    return await this.auctionService.getAuctionById(id);
  }
  @Put('update/:id')
  async updateAuction(
    @Param('id') id: string,
    @Body() updateAuction: createAuction,
  ) {
    return await this.auctionService.updateAuction(id, updateAuction);
  }

  @Delete('delete/:id')
  async deleteAuction(@Param('id') id: string) {
    return await this.auctionService.deleteAuction(id);
  }

  @Get('getBids/:auctionId')
  async getAuctionBids(@Param('id') id: string) {
    return await this.auctionService.getAuctionBids(id);
  }
}
