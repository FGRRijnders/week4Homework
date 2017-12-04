//Type your code here
function timer(){
  alert("Wait for it...");
  kony.timer.schedule(
  "refreshtimer",
  refreshTimer,
  5,
  true);
}

function refreshTimer(){
  alert("Timer refreshed");
}

function showSite(){
var httpclient = new kony.net.HttpRequest();
httpclient.ResponseType = constants.HTTP_RESPONSE_TYPE_TEXT;
httpclient.onReadyStateChange = onReady();
httpclient.open(constants.HTTP_METHOD_GET,"www.google.nl",false);
httpclient.send();
}

function onReady(){
  if(this.status==200){
   kony.application.getCurrentForm().TextArea0.text = this.response; 
  }
}

function tryAccelerator(){
  try{
    kony.accelerometer.retrieveCurrentAcceleration(onSuccessCallback, onFailureCallback);
  } catch(err){
    alert("Accelerometer not supported");
  }
}

function onSuccessCallback(accelerometerdata){
  alert("X: " + accelerometerdata.x + 
        "\nY: " + accelerometerdata.y +
        "\nZ: " + accelerometerdata.z);
}

function onFailureCallback(){
  alert("FCK YOU");
}

function camera(){
  kony.application.getCurrentForm().imgPicture.rawBytes = kony.application.getCurrentForm().cam.rawBytes
}