export function APIException(message, code){
  this.message = message;
  this.code = code;

  this.toString = function printError(){
    return "Error: " + this.message;
  }
}