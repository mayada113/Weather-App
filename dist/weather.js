class WeatherApp {

    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
        this.cityData = []
        const data = await $.get('/cities')
        for (let city of data) {
            await this.getCityData(city.name)
        }
        //this.cityData = data
    }


    async getCityData(cityName) {
        //check if already exist 
        let cityEle = undefined
        if (this.cityData.length > 0) {
            cityEle = this.cityData.find(u => u.name.toLowerCase() == cityName.toLowerCase())
        } 
        if (cityEle == undefined) {
            let city = await $.get(`/city/${cityName}`) 
           if(city.name) this.cityData.push(city)
        }
    }

    saveCity(cityName) {
        const city = this.cityData.find(c => c.name.toLowerCase() == cityName.toLowerCase())
        $.post('/city', city)
    }

    removeCity(cityName) {
        $.ajax({
            url: `/city/${cityName}`,
            type: 'DELETE'
        });
    }

}