var web3;

var contractAbi = [{ "constant": false, "inputs": [], "name": "divest", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalAmountWagered", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getBankroll", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_nSpins", "type": "uint256" }], "name": "buySpins", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [{ "name": "myid", "type": "bytes32" }], "name": "getSpinsContainer", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_nSpins", "type": "uint256" }], "name": "getMinAmountToWager", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "currentInvestor", "type": "address" }], "name": "getProfitShare", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "numInvestors", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "currentInvestor", "type": "address" }], "name": "getLossesShare", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "vote", "type": "bool" }], "name": "voteEmergencyWithdrawal", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_isStopped", "type": "bool" }], "name": "stop_or_resume_Contract", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "forceDivestOfAllInvestors", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "myid", "type": "bytes32" }, { "name": "result", "type": "string" }], "name": "__callback", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "_nSpins", "type": "uint256" }], "name": "getMaxAmountToWager", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "myid", "type": "bytes32" }, { "name": "result", "type": "string" }, { "name": "_proof", "type": "bytes" }], "name": "__callback", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "isStopped", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "investors", "outputs": [{ "name": "investorAddress", "type": "address" }, { "name": "amountInvested", "type": "uint256" }, { "name": "votedForEmergencyWithdrawal", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "searchSmallestInvestor", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "withdrawalAddress", "type": "address" }], "name": "proposeEmergencyWithdrawal", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "currentInvestor", "type": "address" }], "name": "forceDivestOfOneInvestor", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "proposedWithdrawal", "outputs": [{ "name": "toAddress", "type": "address" }, { "name": "atTime", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "investorsLosses", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "investorsProfit", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "investorIDs", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getMinInvestment", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "acceptOwnership", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_minBet", "type": "uint256" }], "name": "setMinBet", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "increaseInvestment", "outputs": [], "payable": true, "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "changeOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "multipliers", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_probabilities", "type": "uint256[]" }, { "name": "_multipliers", "type": "uint256[]" }], "name": "setConfiguration", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "invested", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "houseAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_gas", "type": "uint256" }], "name": "setSafeGas", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "executeEmergencyWithdrawal", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "probabilities", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "currentInvestor", "type": "address" }], "name": "getBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_newHouse", "type": "address" }], "name": "changeHouse", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "newInvestor", "outputs": [], "payable": true, "type": "function" }, { "inputs": [{ "name": "_verifierAddr", "type": "address" }], "payable": false, "type": "constructor" }, { "payable": true, "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "myid", "type": "bytes32" }, { "indexed": true, "name": "playerAddress", "type": "address" }, { "indexed": false, "name": "amountWagered", "type": "uint256" }, { "indexed": false, "name": "nSpins", "type": "uint256" }], "name": "LOG_newSpinsContainer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "myid", "type": "bytes32" }, { "indexed": true, "name": "playerAddress", "type": "address" }, { "indexed": false, "name": "spinIndex", "type": "uint256" }, { "indexed": false, "name": "numberDrawn", "type": "uint256" }, { "indexed": false, "name": "grossPayoutForSpin", "type": "uint256" }], "name": "LOG_SpinExecuted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "myid", "type": "bytes32" }, { "indexed": true, "name": "playerAddress", "type": "address" }, { "indexed": false, "name": "netPayout", "type": "uint256" }], "name": "LOG_SpinsContainerInfo", "type": "event" }, { "anonymous": false, "inputs": [], "name": "LOG_EmergencyWithdrawalProposed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "withdrawalAddress", "type": "address" }], "name": "LOG_EmergencyWithdrawalFailed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "withdrawalAddress", "type": "address" }, { "indexed": false, "name": "amountWithdrawn", "type": "uint256" }], "name": "LOG_EmergencyWithdrawalSucceeded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "investor", "type": "address" }, { "indexed": false, "name": "vote", "type": "bool" }], "name": "LOG_EmergencyWithdrawalVote", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "investor", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "LOG_InvestorEntrance", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "investor", "type": "address" }, { "indexed": false, "name": "amount", "type": "int256" }], "name": "LOG_InvestorCapitalUpdate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "investor", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "LOG_InvestorExit", "type": "event" }, { "anonymous": false, "inputs": [], "name": "LOG_EmergencyAutoStop", "type": "event" }, { "anonymous": false, "inputs": [], "name": "LOG_ZeroSend", "type": "event" }, { "anonymous": false, "inputs": [], "name": "LOG_ValueIsTooBig", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "addr", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "LOG_FailedSend", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "addr", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "LOG_SuccessfulSend", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_gasLimit", "type": "uint256" }], "name": "LOG_newGasLimit", "type": "event" }, { "anonymous": false, "inputs": [], "name": "LOG_ContractStopped", "type": "event" }, { "anonymous": false, "inputs": [], "name": "LOG_ContractResumed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "oldAddr", "type": "address" }, { "indexed": false, "name": "newOwnerAddress", "type": "address" }], "name": "LOG_OwnerAddressChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "oldAddr", "type": "address" }, { "indexed": false, "name": "newHouseAddress", "type": "address" }], "name": "LOG_HouseAddressChanged", "type": "event" }];

var contractAddress = "0x41fF0796a6c7a201476Bff53C4Cb2C48B084e5e0";

var AddressFilter = null;
var AddressMain = "";

var BetsQueue = [];
var BetsProcessed = [];
var AmountMax = 0;
var AmountMin = 0;

showError = function (d) {
	var n = noty({
		layout: 'topCenter',
		text: d,
		type: 'error',
		timeout: 2000
	});
};

showSuccess = function (d) {
	var n = noty({
		layout: 'topCenter',
		text: d,
		type: 'success',
		timeout: 2000
	});
};

showAlert = function (profit) {
	var d = '<span class="win_toastr"><p class="count">' + profit + '</p></span>';
	var n = noty({
		layout: 'topCenter',
		text: d,
		type: 'success',
		timeout: 10000
	});
};

$(document).ready(function () {
	try {
		if (typeof web3 !== 'undefined') {
			web3 = new Web3(web3.currentProvider);
		} else {
			web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		}

		$("#rollbtn").prop("enabled", true);

		AddressMain = web3.eth.accounts[0];

		refresBetAmounts = function () {
			var value = parseInt($('#txtSpins').val());

			var contract = web3.eth.contract(contractAbi).at(contractAddress);

			contract.getMinAmountToWager(value, function (error, result) {
				var x = parseFloat(result.toString()) / Math.pow(10, 15);
				x = Math.ceil(x) / 1000;
				$("#txtBet").val(x.toFixed(3));
				$("#txtBet").prop("min", x.toFixed(3));
				AmountMin = x;
				$("#spanMinMax").text("Between " + AmountMin.toFixed(3) + " and " + AmountMax.toFixed(3));
			});

			contract.getMaxAmountToWager(value, function (error, result) {
				var x = parseFloat(result.toString()) / Math.pow(10, 15);
				x = Math.floor(x) / 1000;
				$("#txtBet").prop("max", x.toFixed(3));
				AmountMax = x;
				$("#spanMinMax").text("Between " + AmountMin.toFixed(3) + " and " + AmountMax.toFixed(3));
			});
		};

		$("#txtSpins").on("input", function () {
			refresBetAmounts();
		});
		refresBetAmounts();

		$("#rollbtn").click(function (e) {
			try {

				var from = "";
				try {
					from = web3.eth.accounts[0];
				}
				catch (e) {

				}
				var to = contractAddress;

				var contract = web3.eth.contract(contractAbi).at(contractAddress);

				var value = parseFloat($('#txtBet').val());

				console.log(value);

				value = web3.toWei(value, 'ether');

				console.log(value);

				var tx_info = { from: from, to: to, value: value, gas: 250000 };

				contract.buySpins(parseInt($('#txtSpins').val()), tx_info, function (error, result) {
					if (!error) {
						showSuccess("Bet placed, please wait for bet to be processed by Ethereum network.");
					}
					else {
						showError("Issue placing bet.");
					}
				});

			}
			catch (e) {
				console.log(e);
				showError("Issue placing bet. Unlock Metamask first.");
			}

		});
	}
	catch (e1) {
		console.log(e1);
		$("#spanUnlock").text("Run Metamask and refresh website.");
	}


	OneByOne = function () {
		try {
			var bet = BetsQueue.shift();

			if (bet != null) {
				BetsProcessed.push(bet);

				$.post("/Home/_MarkAsSeen/" + bet.myid + "/" + bet.spinIndex, function () {

				});

				var spin1 = bet["numberDrawn"].substring(1, 1);
				var spin2 = bet["numberDrawn"].substring(2, 1);
				var spin3 = bet["numberDrawn"].substring(3, 1);

				roll(spin1, spin2, spin3);

				var profit = bet["netPayoutForSpin"];
				if (profit > 0) {
					console.log(profit);
					profit = profit / Math.pow(10, 18);
					console.log(profit);

					setTimeout(function () {
						showAlert("You won " + profit.toFixed(4) + " ETH.");
					}, 1000);
				}
			}
		}
		catch (e)
		{
			console.log(e);
		}
	}


	$("#spanFilter").on("input", function () {
		AddressFilter = $("#spanFilter").val();
		console.log(AddressFilter);
		$("#divLastUserBets").load("/Home/_LastUserBets/" + AddressFilter);
		Cookies.set("AddressFilter", AddressFilter, { expires: 60000 });
	});

	AddressFilter = Cookies.get("AddressFilter"); // user address filter
	if (AddressFilter != null) {
		$("#spanFilter").val(AddressFilter);
		$("#divLastUserBets").load("/Home/_LastUserBets/" + AddressFilter);
	}

	setInterval(function () {
		$("#divLastBets").load("/Home/_LastBets");

		if (AddressFilter != null) {
			$("#divLastUserBets").load("/Home/_LastUserBets/" + AddressFilter);
		}

		try {
			try {
				AddressMain = web3.eth.accounts[0];
			}
			catch (e)
			{

			}

			web3.eth.getBalance(AddressMain, function (error, result) {
				var balance = web3.fromWei(result, "ether");
				$("#txtBalance").val(balance);
			});

			$.get("/Home/_LastNewUserBets/" + AddressMain, function (result) {
				if (result.length > 0) {
					for (var k in result) {
						var bet = result[k];
						var exists = false;

						for (var i = 0; i < BetsQueue.length; i++) {
							if (BetsQueue[i].myid == bet.myid && BetsQueue[i].spinIndex == bet.spinIndex) {
								exists = true;
							}
						}
						for (var i = 0; i < BetsProcessed.length; i++) {
							if (BetsProcessed[i].myid == bet.myid && BetsProcessed[i].spinIndex == bet.spinIndex) {
								exists = true;
							}
						}

						if (!exists) {
							console.log(bet);
							BetsQueue.push(bet);
						}
					}
				}
			});
		}
		catch (e)
		{
			console.log(e);
		}

		OneByOne();

	}, 3000);



});