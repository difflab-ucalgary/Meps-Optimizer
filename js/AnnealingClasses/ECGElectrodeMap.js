class EcgElectrodeMap {
    constructor(keypoint1, keypoint2, score, snr, electrodePair) {
        this.keypoint1 = keypoint1;
        this.keypoint2 = keypoint2;
        this.score = score;
        this.snr = snr;
        this.electrodePair= electrodePair;
    }
    get GetScore(){
        return this.score;
    }

    get GetKeyPoints(){
        return [this.keypoint1, this.keypoint2];
    }

    get GetKeyPoint1(){
        return this.keypoint1;
    }

    get GetKeyPoint2(){
        return this.keypoint2;
    }
    // Getter
    get GetElectrodePair() {
        return this.electrodePair;
    }

}
