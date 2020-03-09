


let botao1 = $('#option1');
let botao2 = $('#option2');


botao1.click(function (e) {
  // e.preventDefault();
  console.log(botao1);

  if (botao1.checked) {
    window.alert('Ligado');
  } else {
    window.alert('Ligado');
  }

});



botao2.click(function (e) {
  e.preventDefault();
  window.alert("Botão2");

});


//Cliente MQQT

var mqtt;
var reconnectTimeout = 2000;
var host = "192.168.0.45";
var port = 8883;
function onConnect(){
console.log("Conectado");
mqtt.subscribe(".Televisao_01");
mqtt.subscribe(".Televisao_02");
mqtt.subscribe(".Televisao_03");
mqtt.subscribe(".Televisao_04");
mqtt.subscribe(".Televisao_05");
mqtt.subscribe(".Televisao_06");
mqtt.subscribe(".Televisao_07");
mqtt.subscribe(".Televisao_08");
}

function onError(message) {
console.log("Falha");
setTimeout(MQTTConnect, reconnectTimeout);
}
function onMessageArrived(msg) {
console.log(topic3.payloadString);
	if(msg.destinationName == ".Televisao_01" && topic3.payloadString != msg.payloadString){	
	
		var t = document.getElementById("Televisao_01");
		$( "#Televisao_01" ).prop( "disabled", false );
		if (msg.payloadString == ".true") {	
		$('#Televisao_01').bootstrapToggle('on');
		
		}
		if (msg.payloadString == ".false") {	
		$('#Televisao_01').bootstrapToggle('off');		
		}	
		$( "#Televisao_01" ).prop( "disabled", true );		
	}	
	if(msg.destinationName == ".Televisao_02" && topic3.payloadString != msg.payloadString){		
		$( "#Televisao_02" ).prop( "disabled", false );
		var t = document.getElementById("Televisao_02");
		if (msg.payloadString == ".true") {	
		$('#Televisao_02').bootstrapToggle('on');
		}
		if (msg.payloadString == ".false") {	
		$('#Televisao_02').bootstrapToggle('off');		
		}		
		$( "#Televisao_02" ).prop( "disabled", true );
	}	
	if(msg.destinationName == ".Televisao_03" && topic3.payloadString != msg.payloadString){		
		$( "#Televisao_03" ).prop( "disabled", false );
		var t = document.getElementById("Televisao_03");
		if (msg.payloadString == ".true") {	
		$('#Televisao_03').bootstrapToggle('on');
		}
		if (msg.payloadString == ".false") {	
		$('#Televisao_03').bootstrapToggle('off');		
		}		
		$( "#Televisao_03" ).prop( "disabled", true );
	}		
	if(msg.destinationName == ".Televisao_04" && topic3.payloadString != msg.payloadString){		
		$( "#Televisao_04" ).prop( "disabled", false );
		var t = document.getElementById("Televisao_04");
		if (msg.payloadString == ".true") {	
		$('#Televisao_04').bootstrapToggle('on');
		}
		if (msg.payloadString == ".false") {	
		$('#Televisao_04').bootstrapToggle('off');		
		}		
		$( "#Televisao_04" ).prop( "disabled", true );
	}	
	if(msg.destinationName == ".Televisao_05" && topic3.payloadString != msg.payloadString){	
		$( "#Televisao_05" ).prop( "disabled", false );
		var t = document.getElementById("Televisao_05");
		if (msg.payloadString == ".true") {	
		$('#Televisao_05').bootstrapToggle('on');
		}
		if (msg.payloadString == ".false") {	
		$('#Televisao_05').bootstrapToggle('off');		
		}		
		$( "#Televisao_05" ).prop( "disabled", true );
	}	
	if(msg.destinationName == ".Televisao_06" && topic3.payloadString != msg.payloadString){	
		$( "#Televisao_06" ).prop( "disabled", false );
		var t = document.getElementById("Televisao_06");
		if (msg.payloadString == ".true") {	
		$('#Televisao_06').bootstrapToggle('on');
		}
		if (msg.payloadString == ".false") {	
		$('#Televisao_06').bootstrapToggle('off');		
		}		
		$( "#Televisao_06" ).prop( "disabled", true );
	}	
	if(msg.destinationName == ".Televisao_07" && topic3.payloadString != msg.payloadString){	
		$( "#Televisao_07" ).prop( "disabled", false );
		var t = document.getElementById("Televisao_07");
		if (msg.payloadString == ".true") {	
		$('#Televisao_07').bootstrapToggle('on');
		}
		if (msg.payloadString == ".false") {	
		$('#Televisao_07').bootstrapToggle('off');		
		}		
		$( "#Televisao_07" ).prop( "disabled", true );
	}	
	if(msg.destinationName == ".Televisao_08" && topic3.payloadString != msg.payloadString){	
		$( "#Televisao_08" ).prop( "disabled", false );
		var t = document.getElementById("Televisao_08");
		if (msg.payloadString == ".true") {	
		$('#Televisao_08').bootstrapToggle('on');
		}
		if (msg.payloadString == ".false") {	
		$('#Televisao_08').bootstrapToggle('off');		
		}		
		$( "#Televisao_08" ).prop( "disabled", true );
	}	
	

	
	var t = new Date(msg.payloadString);
}

var undeliveredMessages = [];

function publish(topic, message, onMessageDeliveredCallback) {
    message = new Paho.MQTT.Message(message);
    message.destinationName = topic;
    message.qos = 2;
    undeliveredMessages.push({
        message: message,
        onMessageDeliveredCallback: onMessageDeliveredCallback
    });
    mqtt.send(message);
	topic3 = message;
	
	
}

function MQTTConnect() {
	console.log("Conectando");
	mqtt = new Paho.MQTT.Client(host, port, "Teste HTML");
	var options = { 
		timeout: 10,
		keepAliveInterval: 10,
		onSuccess: onConnect,
		onFailure: onError
		};
	mqtt.onMessageArrived = onMessageArrived;
	mqtt.onConectionLost = onError;
	mqtt.connect(options);
	
}

function Enable(){

if($("#Automacao").prop('checked') == false){
 $( "#Televisao_01" ).prop( "disabled", false );
 $( "#Televisao_02" ).prop( "disabled", false );
 $( "#Televisao_03" ).prop( "disabled", false );
 $( "#Televisao_04" ).prop( "disabled", false );
 $( "#Televisao_05" ).prop( "disabled", false );
 $( "#Televisao_06" ).prop( "disabled", false );
 $( "#Televisao_07" ).prop( "disabled", false );
 $( "#Televisao_08" ).prop( "disabled", false ); 
 publish('.Automacao', ".false", null);
 }else{
$( "#Televisao_01" ).prop( "disabled", true );
$( "#Televisao_02" ).prop( "disabled", true );
$( "#Televisao_03" ).prop( "disabled", true );
$( "#Televisao_04" ).prop( "disabled", true );
$( "#Televisao_05" ).prop( "disabled", true );
$( "#Televisao_06" ).prop( "disabled", true );
$( "#Televisao_07" ).prop( "disabled", true );
$( "#Televisao_08" ).prop( "disabled", true );
publish('.Automacao', ".true", null);


}


}