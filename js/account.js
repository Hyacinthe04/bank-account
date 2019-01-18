var account;
var accountArray = [];
var accountIndex = [];


function Name(first, last, deposit){
  this.firstName = first;
  this.lastName = last;
  this.deposit = deposit;
}

Name.prototype.depositMoney = function(amount){
  this.deposit += amount;
  return this.deposit;
}
Name.prototype.withdrawMoney = function(amount){
  this.deposit -= amount;
  return this.deposit;


function checkAccount(name) {
  var accountTemp = -1;
  accountIndex.forEach(function(element, index){
    if (element === name) {
      accountTemp = accountArray[index];
    }
  });
  return accountTemp;
}

function getReceipt(account) {
  $("#receipt").text("");
  $("#receipt").append("<p>Appreciating for banking with us " + account.firstName + "!</p>" +
                        "<p>Your balance now is " + account.deposit + "RWF</p>");
}

function resetInput() {
  $("input.firstname-input").val("");
  $("input.lastname-input").val("");
  $("input.deposit-initial").val("");
  $("input.withdraw-input").val("");
  $("input.deposit-input").val("");
  $("input.acct-deposit-input").val("");
  $("input.acct-withdraw-input").val("");
}

$(document).ready(function() {
  $("#createAccount").submit(function(event){
    event.preventDefault();
    var firstName = $("input.firstname-input").val();
    var lastName = $("input.lastname-input").val();
    var deposit = parseFloat($("input.deposit-initial").val());

    account = new Name(firstName, lastName, deposit);
    accountArray.push(account);
    accountIndex.push(firstName);
    console.log(account);
    getReceipt(account);
    resetInput();
  });

  $("button.deposit-input").click(function(){
    var accountName = $("input.acct-deposit-input").val();
    if (checkAccount(accountName) !== -1){
      account = checkAccount(accountName);
      account.depositMoney(parseFloat($("input.deposit-input").val()));
      getReceipt(account);
      console.log(account);
    } else {
      $("#receipt").text("");
      alert("account created");
    }

    resetInput();

  });

  $("button.withdraw-input").click(function(){
    var accountName = $("input.acct-withdraw-input").val();
    if (checkAccount(accountName) !== -1){
      account = checkAccount(accountName);
      var withdrawHolder = parseFloat($("input.withdraw-input").val());
      if (withdrawHolder > account.deposit) {
        alert("Your balance is insuficient");
      }else account.withdrawMoney(parseFloat($("input.withdraw-input").val()));
      getReceipt(account);
      console.log(account);
    } else {
      $("#receipt").text("");
      alert("account created");
    }

    resetInput();
  });

});