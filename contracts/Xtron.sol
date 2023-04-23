pragma solidity 0.5.14;
library SafeMath {

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a, "SafeMath: subtraction overflow");
        uint256 c = a - b;
        return c;
    }

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }
        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");
        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0, "SafeMath: division by zero");
        uint256 c = a / b;
        return c;
    }
    
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b != 0, "SafeMath: modulo by zero");
        return a % b;
    }
}

contract Xtron{
     using SafeMath for uint256;
    struct userdata{
         bool isExist;
         uint id;
         uint depositAmount;
         uint roiEarnings;
         uint levelEarn;
         address referer;
         uint depositTime;
         uint to_payout;
         uint dailyRoi;
         uint directEarnings;
         uint teamEarnings;
         uint investCount;
         
    }      
         
   
    
   
    uint public currentId = 2;
    address public owner;
    uint public totalInvestors;
    
    
     bool public lockStatus;
    
    event Withdraw(address indexed _from,uint value,uint time);
    event ReferalBonus(address indexed _from, address indexed to, uint value);
    event MatchBonus(address indexed _from,address indexed to,uint value);
    event PayoutReached(address indexed _from,uint amount);
    event Investment(address indexed _from,uint value,uint time,uint count);
    event Leader(address indexed _from,uint value,uint time);
    
    
    mapping(address => userdata)public users;
    mapping(uint => address)public userList;
    mapping(uint => uint)public roiBonus;
    mapping(uint => uint)public referalCommission;
    mapping(address => uint)public investAmount;
    mapping(address => mapping(uint => bool))public leaderStatus;
    mapping(address => bool)public completedStatus;
    mapping(address => uint)public directReferal;
    
    constructor(address _owner)public{
        owner = _owner;
        
         userdata memory user;
        user = userdata({
            isExist:true,
            id : 1,
            roiEarnings:0,
            depositAmount:0,
            levelEarn :0,
            referer : address(0),
            depositTime: block.timestamp,
            to_payout:0,
            dailyRoi:0,
            directEarnings : 0,
            teamEarnings : 0,
            investCount:0
            
            
        });
        
        users[owner] = user;
        userList[1] = owner; 
        
        //Ref commision 
        referalCommission[1] = 10 * 1e18;
        referalCommission[2] = 5 * 1e18;
        referalCommission[3] = 2 * 1e18;
       
        for(uint i=4;i<=10;i++){
            referalCommission[i] = 1 * 1e18;
        }
        
        //roi bonus
        roiBonus[1] = 25 * 1e18;
        roiBonus[2] = 5 * 1e18;
        roiBonus[3] = 4 * 1e18;
        roiBonus[4] = 3 * 1e18;
        
        for(uint i=5; i<=10; i++){
            roiBonus[i] = 2 * 1e18;
        }
        
        for(uint i=11; i<=20; i++){
            roiBonus[i] = 1 * 1e18;
        }
        
        for(uint i=21; i<=30; i++){
            roiBonus[i] = 0.5 * 1e18;
        }
        
       
        
        
    }
    
    modifier onlyOwner() {
            require(msg.sender == owner, "Only Owner");
            _;
        } 
        
    modifier isLock() {
        require(lockStatus == false, "Contract Locked");
        _;
    } 
    

    function()external payable{
        
    }

    function invest(address _refer)public  isLock payable{
        address addr = tx.origin;
        require(users[addr].isExist == false || completedStatus[addr] == true ,"user already exist");
        require(users[_refer].isExist == true,"refer not exist");
        require(msg.value >= 10 * 1e18,"Given amount less than minimum amount");
          
           if(users[addr].isExist == false){
            userdata memory user;
            user = userdata({
            isExist:true,
            id : currentId,
            roiEarnings:0,
            depositAmount:msg.value,
            levelEarn :0,
            referer : _refer,
            depositTime: block.timestamp,
            to_payout:0,
            dailyRoi:0,
            directEarnings : 0,
            teamEarnings : 0,
            investCount:1
            });  
            users[addr] = user;
            userList[currentId] = addr;
            currentId++;
        
   } 
           
           else{
           
           
           completedStatus[addr] = false;
           users[addr].depositAmount = msg.value;
           users[addr].levelEarn = 0;
           users[addr].roiEarnings = 0;
           users[addr].depositTime = block.timestamp;
           users[addr].to_payout = 0;
           users[addr].dailyRoi = 0;
           users[addr].investCount = users[addr].investCount.add(1); 
           users[addr].directEarnings = 0;
           users[addr].teamEarnings = 0;
           
           for(uint i = 1;i<=5;i++){
               leaderStatus[addr][i] = false;
           }
           
           
    }
         
       
        directReferal[_refer] = directReferal[_refer].add(1);
      
         refCommision(users[addr].referer,msg.value.mul(10 * 1e18).div(100 * 1e18));
        
         
         totalInvestors = totalInvestors.add(1);
        

         emit Investment(addr,msg.value,block.timestamp,users[addr].investCount);
    }
    
    function refCommision(address refer,uint amount)internal{
        address _ref = refer;
        for(uint i =1;i<=10;i++){
        if(_ref == address(0))
         _ref = owner;
        users[_ref].levelEarn =  users[_ref].levelEarn.add(amount.mul(referalCommission[i]).div(100 * 1e18));
         if(i==1)
         users[_ref].directEarnings = users[_ref].directEarnings.add(amount.mul(referalCommission[i]).div(100 * 1e18));
         
        else if(i > 1)
        users[_ref].teamEarnings =  users[_ref].teamEarnings.add(amount.mul(referalCommission[i]).div(100 * 1e18));    
         
        emit ReferalBonus(msg.sender,_ref,amount.mul(referalCommission[i]).div(100 * 1e18));
      
        _ref = users[_ref].referer;
        }
    }  
        
       
      
    
    function matchBonus(address refer,uint amount)internal{
        address _ref = refer;
        for(uint i = 1;i<=30;i++){
        if(_ref == address(0))
        _ref = owner;
        if(directReferal[_ref] >= i + 0 ){
        users[_ref].roiEarnings =  users[_ref].roiEarnings.add(amount.mul(roiBonus[i]).div(100 * 1e18));
        if(i == 1)
        users[_ref].directEarnings =  users[msg.sender].directEarnings.add(amount.mul(roiBonus[i]).div(100 * 1e18));
        
        else if(i > 1)
        users[_ref].teamEarnings =  users[msg.sender].teamEarnings.add(amount.mul(roiBonus[i]).div(100 * 1e18));    
        
        emit MatchBonus(msg.sender,_ref,amount.mul(roiBonus[i]).div(100 * 1e18));
        }
        _ref = users[_ref].referer;
         
    
        }
    }
       
        
         
    function userWithdraw()public isLock{
       ( uint max_pay, uint pay) = payout(msg.sender);
      
        require(users[msg.sender].to_payout < max_pay || msg.sender == owner, "Full payouts");
        
        // to payout 
        if(users[msg.sender].to_payout.add(pay) > max_pay){
        pay = max_pay.sub(users[msg.sender].to_payout);
        }
        users[msg.sender].dailyRoi = users[msg.sender].dailyRoi.add(pay);
        users[msg.sender].to_payout = users[msg.sender].to_payout.add(pay);
        matchBonus(users[msg.sender].referer,users[msg.sender].dailyRoi);
        
        //level earnings
        
        if(users[msg.sender].levelEarn > 0 ){
        pay = pay.add(users[msg.sender].levelEarn);
        users[msg.sender].levelEarn = 0;
        }
        
        // roi earnings
        
        if(users[msg.sender].roiEarnings > 0){
        pay = pay.add(users[msg.sender].roiEarnings);
        users[msg.sender].roiEarnings = 0;
        }
        
        require(address(uint160(msg.sender)).send(pay),"withdraw failed");
        emit Withdraw(msg.sender,pay,block.timestamp);
        
        if(users[msg.sender].to_payout >= max_pay){
        completedStatus[msg.sender] = true;
        emit PayoutReached(msg.sender,users[msg.sender].to_payout);
        }
       
    }
    
    function maxPayout(uint amount)public pure returns(uint){
        return (amount.mul(300)).div(100);
    }
    
    function payout(address user)public view returns(uint max_payout,uint pay){
        max_payout = maxPayout(users[user].depositAmount);
        uint deposit = users[msg.sender].depositAmount;
        uint daysCount;
        uint calc;
        
        if(users[msg.sender].dailyRoi < max_payout){
            daysCount = (block.timestamp.sub(users[msg.sender].depositTime)).div(1 days);
            calc  = (deposit.mul(1.5 * 1e18).div(100 * 1e18)).mul(daysCount);
            pay = calc.sub(users[msg.sender].dailyRoi);
         
           if(pay >= max_payout){
            pay = max_payout.sub(users[msg.sender].dailyRoi);
           }
        }
    } 
    
   
    
  
    
    function leaderAward(address user)public payable onlyOwner{
        if(users[user].directEarnings >= 10000000 * 1e18 && users[user].teamEarnings >= 50000000 * 1e18){   //  Celebrity Leader
        require(leaderStatus[user][5] == false,"already got rewrard");
        leaderStatus[user][5] = true;
        require(address(uint160(user)).send(500000 * 1e18),"Leaderreward failed");
        emit Leader(user,500000 * 1e18,block.timestamp);
        
    }
        else if(users[user].directEarnings >= 5000000 * 1e18 && users[user].teamEarnings >= 20000000 * 1e18){   // Mega Star Leader
        require(leaderStatus[user][4] == false,"already got rewrard");
        leaderStatus[user][4] = true;
        require(address(uint160(user)).send(250000 * 1e18),"Leaderreward failed");
        emit Leader(user,250000 * 1e18,block.timestamp);
        
    }
        else if(users[user].directEarnings >= 2500000 * 1e18 && users[user].teamEarnings >= 10000000 * 1e18){  // Super Star Leader
        require(leaderStatus[user][3] == false,"already got rewrard");
        leaderStatus[user][3] = true;
        require(address(uint160(user)).send(100000 * 1e18),"Leaderreward failed");
        emit Leader(user,100000 * 1e18,block.timestamp);
        
    }                                                                                    
        else if(users[user].directEarnings >= 1000000 * 1e18 && users[user].teamEarnings >= 5000000 * 1e18){   // Star Leader
        require(leaderStatus[user][2] == false,"already got rewrard");
        leaderStatus[user][2] = true;
        require(address(uint160(user)).send(50000 * 1e18),"Leaderreward failed");
        emit Leader(user,50000 * 1e18,block.timestamp);
        
    }
        else if(users[user].directEarnings >= 500000 * 1e18 && users[user].teamEarnings >= 2500000 * 1e18){   // Leader
        require(leaderStatus[user][1] == false,"already got rewrard in 1");
        leaderStatus[user][1] = true;
        require(address(uint160(user)).send(25000 * 1e18),"Leaderreward failed");
        emit Leader(user,25000 * 1e18,block.timestamp);
        
    }
    }
        
    
    
    function viewDirectEarnings(address user)public view returns(uint earn,uint team){
        earn = users[user].directEarnings;
        team = users[user].teamEarnings;
        
    }
        
    function userDetails(address _user)public view returns(uint,uint,uint,uint){
        return (
        users[_user].depositTime,
        users[_user].depositAmount,
        users[_user].levelEarn,
        users[_user].roiEarnings
        
        );
     }
    
    function contractLock(bool _lockStatus) public onlyOwner returns(bool) {
        lockStatus = _lockStatus;
        return true;
    }
        
    function failSafe(address payable _toUser, uint _amount) public onlyOwner returns (bool) {
        require(_toUser != address(0), "Invalid Address");
        require(address(this).balance >= _amount, "Insufficient balance");
        
        (_toUser).transfer(_amount);
        return true;
    }
    
   
    
    
}
