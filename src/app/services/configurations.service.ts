import { Injectable } from '@angular/core';
import { Configurations } from '../interfaces/configurations';

@Injectable()
export class ConfigurationsService {

  private _configurations: Configurations = {} as Configurations

  constructor() {
  }

  get configurations(){
    return this._configurations
  }

  get_configurations(){
    this._configurations = {
      menu_type: 'first'
    }
  }

}
