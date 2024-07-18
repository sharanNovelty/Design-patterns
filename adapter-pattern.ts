interface IMacbook {
    useUSBCPort(): string;
}

interface IHeadset {
    useUSBPort(): string;
}

class Macbook implements IMacbook {
    useUSBCPort(): string {
        return 'Using usbc port'
    }
}

class Headset implements IHeadset {
    useUSBPort(): string {
        return 'Using usbc port'
    }
}

class USBToUSBCAdapter implements IMacbook {
    device: IHeadset
    constructor(device: IHeadset) {
        this.device = device
    }
    useUSBCPort(): string {
        console.log('Converting to USB to USBC')
        this.device.useUSBPort()
        return ''
    }
}

const adapter = new USBToUSBCAdapter(new Headset);
adapter.useUSBCPort();

