interface ILogger {
    warn(): any;
    success(): any;
    error(): any
}

class LoggerBase implements ILogger {
    warn() {
        console.log('method not implemented')
    }

    success() {
        console.log('method not implemented')
    }

    error(){
        console.log('method not implemented')
    }
}

class ProductionLogger extends LoggerBase {
    constructor(){
        super()
    }
    
    warn(){
        console.log('Warning logger for production');
    }
}

class DevelopmentLogger extends LoggerBase {
    constructor(){
        super()
    }
    
    warn(){
        console.log('Warning logger for development');
    }
}

const loggerFactory = () => {
    const env = 'development'
    if(env === 'development') {
        const developmentLogger = new DevelopmentLogger();
        // changes for production
    } else {
        const productionLogger = new ProductionLogger()
    }
}


