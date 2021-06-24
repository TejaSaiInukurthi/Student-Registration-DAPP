function log(message) {
    $('#log').append($('<p>').text(message));
    $('#log').scrollTop($('#log').prop('scrollHeight'));
  }
  function error(message) {
    $('#log').append($('<p>').addClass('dark-red').text(message));
    $('#log').scrollTop($('#log').prop('scrollHeight'));
  }
  function waitForReceipt(hash, cb) {
    web3.eth.getTransactionReceipt(hash, function (err, receipt) {
      if (err) {
        error(err);
      }
      if (receipt !== null) {
        // Transaction went through
        if (cb) {
          cb(receipt);
        }
      } else {
        // Try again in 1 second
        window.setTimeout(function () {
          waitForReceipt(hash, cb);
        }, 1000);
      }
    });
  }
  const address = "0x0Ef0EF0cAbeb1fDf942d4D803820a0Ac4Ebb9ea5";
  const abi =   [
  {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "electionConducted",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_admin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_electionAddress",
          "type": "address"
        }
      ],
      "name": "ElectionEvent",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_durationInMinutes",
          "type": "uint256"
        },
        {
          "name": "_electionName",
          "type": "string"
        }
      ],
      "name": "createElection",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getElections",
      "outputs": [
        {
          "name": "_conductedElection",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "candidateExist",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "consituencyList",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "votersList",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "electionName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "candidateData",
      "outputs": [
        {
          "name": "candidateId",
          "type": "address"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "email",
          "type": "string"
        },
        {
          "name": "phoneNo",
          "type": "string"
        },
        {
          "name": "consituencyId",
          "type": "uint256"
        },
        {
          "name": "party",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidateList",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "voterExist",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "voterData",
      "outputs": [
        {
          "name": "voterId",
          "type": "address"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "email",
          "type": "string"
        },
        {
          "name": "phoneNo",
          "type": "string"
        },
        {
          "name": "consituencyId",
          "type": "uint256"
        },
        {
          "name": "age",
          "type": "uint8"
        },
        {
          "name": "voted",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "consituencyExist",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "consituencyData",
      "outputs": [
        {
          "name": "consituencyId",
          "type": "uint256"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "winner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_durationInMinutes",
          "type": "uint256"
        },
        {
          "name": "_admin",
          "type": "address"
        },
        {
          "name": "_electionName",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_candidateId",
          "type": "address"
        }
      ],
      "name": "getCandidateData",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_voterId",
          "type": "address"
        }
      ],
      "name": "getVoterData",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_consituencyId",
          "type": "uint256"
        },
        {
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addConsituency",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getConsituencyIdList",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_candidateId",
          "type": "address"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_email",
          "type": "string"
        },
        {
          "name": "_phoneNo",
          "type": "string"
        },
        {
          "name": "_consituencyId",
          "type": "uint256"
        },
        {
          "name": "_party",
          "type": "string"
        }
      ],
      "name": "addCandidate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCandidatesIdList",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_consituencyId",
          "type": "uint256"
        }
      ],
      "name": "getConsituencyCandidates",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCandidateConsituency",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_voterId",
          "type": "address"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_email",
          "type": "string"
        },
        {
          "name": "_phoneNo",
          "type": "string"
        },
        {
          "name": "_consituencyId",
          "type": "uint256"
        },
        {
          "name": "_age",
          "type": "uint8"
        }
      ],
      "name": "addVoter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getVotersIdList",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_consituencyId",
          "type": "uint256"
        }
      ],
      "name": "getConsituencyVoters",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getVoterConsituency",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_consituencyId",
          "type": "uint256"
        },
        {
          "name": "_candidateId",
          "type": "address"
        }
      ],
      "name": "castVote",
      "outputs": [
        {
          "name": "status",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_consituencyId",
          "type": "uint256"
        },
        {
          "name": "_candidateId",
          "type": "address"
        }
      ],
      "name": "getVotes",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "closeElection",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];


   $(function () {
    var Election;
   
     $('#getcandidatelist').click(function (e) {
      e.preventDefault();
      Election.getCandidatesIdList.call(function (err, re) {
        if (err) {
          return error(err);
        } 

        window.alert(re);
      });

    });
  

     $('#admin').click(function (e) {
      e.preventDefault();
      Election.admin.call(function (err, re) {
        if (err) {
          return error(err);
        } 

        window.alert(re);
      });
    });

      $('#voterlist').click(function (e) {
      e.preventDefault();
      Election.getVotersIdList.call(function (err, re) {
        if (err) {
          return error(err);
        } 

        window.alert(re);
      });
    });


       $('#getvoterdata').click(function (e) {
       e.preventDefault();
      Election.getVoterData.call(
        document.getElementById("getvoterid").value,
        function (err, re) {
        if (err) {
          return error(err);
        } 

        window.alert(re);
      });
    });

     $('#voterexist').click(function (e) {
      e.preventDefault();
      console.log( document.getElementById("voterexistid").value);
      Election.voterExist.call(
        document.getElementById("voterexistid").value,
        function (err, re) {
        if (err) {
          return error(err);
        } 

        window.alert(re);
      });
    });


     $('#candidatedata').click(function (e) {
       e.preventDefault();
      Election.getCandidateData.call(
        document.getElementById("getcandidateconstituencyid").value,
        function (err, re) {
        if (err) {
          return error(err);
        } 

        window.alert(re);
      });
    });

     $('#candidateexist').click(function (e) {
      e.preventDefault();
      console.log(document.getElementById("canidateexist").value);
      Election.candidateExist.call(
        document.getElementById("canidateexist").value,
        function (err, re) {
        if (err) {
          return error(err);
        } 

        window.alert(re);
      });
    });

      $('#getconstituency').click(function (e) {
       e.preventDefault();
      Election.consituencyData.call(
        document.getElementById("getconstituencydata").value,
        function (err, re) {
        if (err) {
          return error(err);
        } 

        window.alert(re);
      });
    });

     $('#candidateexistbtn').click(function (e) {
      e.preventDefault();
      Election.consituencyExist.call(
        document.getElementById("constituencyExist").value,
        function (err, re) {
        if (err) {
          return error(err);
        } 

        window.alert(re);
      });
    });


$('#getvotes').click(function (e) {
      e.preventDefault();
      Election.getVotes.call(
        document.getElementById("resultsconstituencyId").value,
        document.getElementById("resultsdfsaconstituencyid").value,
        function (err, re) {
        if (err) {
          return error(err);
        } 

        window.alert(re);
      });
    });


   


    $('#addCandidate').click(function (e) {
      e.preventDefault();
      web3.eth.defaultAccount = web3.eth.accounts[0];
      console.log(web3.eth.defaultAccount);
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      Election.addCandidate.sendTransaction(
      document.getElementById("candidateId").value,
      document.getElementById("candidateName").value,
      document.getElementById("candidateemail").value,
      document.getElementById("canidatephoneno").value,
      document.getElementById("candidateconstituency").value,
      document.getElementById("candidateparty").value,
      function (err, hash) {
        if (err) {
          window.alert("user rejected pls try again");
          return error(err);
          
        }
        waitForReceipt(hash, function () {
          log("Transaction succeeded.")
          window.alert("Transaction Successfull");
        });
      });
    });

    $('#addConstituency').click(function (e) {
      e.preventDefault();
      web3.eth.defaultAccount = web3.eth.accounts[0];
      console.log(web3.eth.defaultAccount);
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      Election.addConsituency.sendTransaction(
      document.getElementById("constituencyId").value,
      document.getElementById("constituencyName").value,
      function (err, hash) {
        if (err) {
          window.alert(err['message']);
          log(err['message'])
          return error(err);
          
        }
        waitForReceipt(hash, function () {
          log("Transaction succeeded.")
          window.alert("Transaction Successfull");
        });
      });
    });


    $('#casteVote').click(function (e) {
      e.preventDefault();
      web3.eth.defaultAccount = web3.eth.accounts[0];
      console.log(web3.eth.defaultAccount);
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      Election.castVote.sendTransaction(
      document.getElementById("voteconstituencyId").value,
      document.getElementById("voteconstituencyid").value,
      function (err, hash) {
        if (err) {
          return error(err);
          window.alert("user rejected pls try again");
        }
        waitForReceipt(hash, function () {
          log("Transaction succeeded.")
          window.alert("Transaction Successfull");
        });
      });
    });
    


    $('#addvoter').click(function (e) {
      e.preventDefault();
      console.log(document.getElementById("voterid").value);
      if(document.getElementById("voterid").value != null && document.getElementById("votername").value != null && document.getElementById("voteremail").value != null && document.getElementById("voterphone").value!= null && document.getElementById("voterconstituency").value != null && document.getElementById("voterage").value != null){
      web3.eth.defaultAccount = web3.eth.accounts[0];
      console.log(web3.eth.defaultAccount);
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      Election.addVoter.sendTransaction(
      document.getElementById("voterid").value,
      document.getElementById("votername").value,
      document.getElementById("voteremail").value,
      document.getElementById("voterphone").value,
      document.getElementById("voterconstituency").value,
      document.getElementById("voterage").value,
      function (err, hash) {
        if (err) {
          return error(err);
          window.alert("user rejected pls try again");
        }
        waitForReceipt(hash, function () {
          log("Transaction succeeded.");
          window.alert("Transaction Successfull");

      //     console.log(document.getElementById("address").value,
      // document.getElementById("name").value,
      // document.getElementById("class").value,
      // document.getElementById("rollno").value,
      // document.getElementById("caste").value,
      // document.getElementById("marks").value); 

        });
      });
    }
    else{
      window.alert("Pls Enter all the details");
    }
    });

    if (typeof(web3) === "undefined") {
      error("Unable to find web3. " +
            "Please run MetaMask (or something else that injects web3).");
    } else {
      log("Found injected web3.");
      web3 = new Web3(web3.currentProvider);
      ethereum.enable();
      if (web3.version.network != 3) {
        error("Wrong network detected. Please switch to the ropsten test network.");
      } else {
        log("Connected to the Ropsten test network.");
        Election = web3.eth.contract(abi).at(address);
        // console.log(Election);
        }
    }
  });
