const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }){
        try{
            const city = await City.create({
                name: name
            });
            return city;

        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;

        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = City.update(data,{
                where:{
                    id: CityId
                }
            });
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async deleteCity(cityId){
        try{
            const city = City.destroy({
                where:{
                    id: CityId
                }
            })

        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
}

module.exports = CityRepository;