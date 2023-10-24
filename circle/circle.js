class circle{
    constructor(radius){
        this.radius=radius;
        this.area=this.setArea();
        this.circumference=this.setcircumference();
    }
    setArea(){
        // noktadan sonra sadece 2 rakamı göstermek için tofixed kullanıldı
        // tofixed(2) yapınca rakamı yuvarlıyor o yüzden 3 rakamı alıp son rakamı sildim
        return (Math.PI * this.radius * this.radius).toFixed(3).slice(0,-1);
    }
    setcircumference(){
        return (2*Math.PI*this.radius).toFixed(3).slice(0,-1);
    }
    circleInfo(){
        console.log(`Yarıçapı ${this.radius} olan dairenin alanı: ${this.area}`);
        console.log(`Yarıçapı ${this.radius} olan dairenin çevresi: ${this.circumference}`);
    }
}

module.exports={circle} 