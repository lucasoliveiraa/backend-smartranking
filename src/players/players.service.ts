import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Players } from './interfaces/players.interface';

@Injectable()
export class PlayersService {
  private players: Players[] = [];

  async createUpdatePlayer(createPlayerDto: CreatePlayerDto): Promise<void> {
    this.create(createPlayerDto);
  }

  private create(createPlayerDto: CreatePlayerDto) {
    const { email, name, phoneNumber } = createPlayerDto;

    const player: Players = {
      _id: uuidV4(),
      name,
      phoneNumber,
      email,
      positionRanking: 1,
      ranking: 'A',
      url_photo: 'www.awdawd.com',
    };
    this.players.push(player);
  }
}
