import AppConstants from "../constants/AppConstants";

const Eureka = require("eureka-js-client").Eureka;

const eurekaClient = new Eureka({
  instance: {
    app: AppConstants.REVIEW_SERVICE,
    hostName: "review-service.bef24bd.kyma.ondemand.com",
    ipAddr: "127.0.0.1",
    status: "UP",
    port: {
      $: 8088,
      "@enabled": true,
    },
    vipAddress: AppConstants.REVIEW_SERVICE,
    dataCenterInfo: {
      "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
      name: "MyOwn",
    },
  },
  eureka: {
    host: "3.229.47.37",
    port: 8761,
    servicePath: "/eureka/apps",
  },
});

export default eurekaClient;
