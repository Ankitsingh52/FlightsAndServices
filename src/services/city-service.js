const { cityRepository } = require('../repository/index');

class CityServie {
    constructor() {
        this.cityRepository = new cityRepository();
    }

    async createCity(city){
        try{
            const city = await this.cityRepository.createCity(city);
            return city;
        }
        catch(error){
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async deleteCity(cityId){
        try{
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        }
        catch(error){
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        }
        catch(error){
            console.log("Something went wrong at service layer");
            throw error;
        } 
    }

    async getCity(cityId){
        try{
            const city = await cityRepository.getCity(cityId);
            return city;
        }
        catch(error){
            console.log("Something went wrong at service layer");
            throw error;
        }
    }
}

module.exports = CityServie;