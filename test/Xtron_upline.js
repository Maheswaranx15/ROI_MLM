const {
    BN,           // Big Number support
    constants,    // Common constants, like the zero address and largest integers
    expectEvent,  // Assertions for emitted events
    expectRevert, // Assertions for transactions that should fail
    time,
} = require('@openzeppelin/test-helpers');
const { italic } = require('ansi-colors');
const { expect } = require('chai');
const Xtron = artifacts.require("Xtron");
contract("Xtron", function (accounts) {

    const RefbonusUpline1 = ((10 / 100))
    const RefbonusUpline2 = ((5 / 100))
    const RefbonusUpline3 = ((2 / 100))
    const RefbonusUpline4 = ((1 / 100))
    const levelbonusUpline = ((25 / 100))
    const levelbonusUpline1 = ((5 / 100))
    const levelbonusUpline2 = ((2 / 100))
    const levelbonusUpline3 = ((2 / 100))
    const levelbonusUpline4 = ((1 / 100))
    const levelbonusUpline5 = ((1 / 100))
    const levelbonusUpline6 = ((1 / 100))
    const levelbonusUpline7 = ((1 / 100))
    const levelbonusUpline8 = ((1 / 100))
    const levelbonusUpline9 = ((1 / 100))
    const levelbonusUpline10 = ((1 / 100))
    const levelbonusUpline11 = ((1 / 100))
    const levelbonusUpline12 = ((1 / 100))
    const levelbonusUpline13 = ((1 / 100))
    const levelbonusUpline14 = ((1 / 100))
    const levelbonusUpline15 = ((1 / 100))
    const levelbonusUpline16 = ((0.5 / 100))
    const levelbonusUpline17 = ((0.5 / 100))
    const levelbonusUpline18 = ((0.5 / 100))
    const levelbonusUpline19 = ((0.5 / 100))
    const levelbonusUpline20 = ((0.5 / 100))
    const levelbonusUpline21 = ((0.5 / 100))
    const levelbonusUpline22 = ((0.5 / 100))
    const levelbonusUpline23 = ((0.5 / 100))
    const levelbonusUpline24 = ((0.5 / 100))
    var XtronInstance;
    const zeroAddress = "0x0000000000000000000000000000000000000000";
    const owner = accounts[0];
    const root1 = accounts[1];
    const root2 = accounts[2];
    const testAccount1 = accounts[3];
    const testAccount2 = accounts[4];
    const testAccount3 = accounts[5];
    const testAccount4 = accounts[6];
    const testAccount5 = accounts[7];
    const testAccount6 = accounts[8];
    const testAccount7 = accounts[9];
    const testAccount8 = accounts[10];
    const testAccount9 = accounts[11];
    const testAccount10 = accounts[12];
    const testAccount11 = accounts[13];
    const testAccount12 = accounts[14];
    const testAccount13 = accounts[15];
    const testAccount14 = accounts[16];
    const testAccount15 = accounts[17];
    const testAccount16 = accounts[18];
    const testAccount17 = accounts[19];
    const testAccount18 = accounts[20];
    const testAccount19 = accounts[21];
    const testAccount20 = accounts[22];
    const testAccount21 = accounts[23];
    const testAccount22 = accounts[24];
    const testAccount23 = accounts[25];
    const testAccount24 = accounts[26];
    const testAccount25 = accounts[27];
    const testAccount26 = accounts[28];
    const testAccount27 = accounts[29];
    const testAccount28 = accounts[30];
    const testAccount29 = accounts[31];
    const testAccount30 = accounts[32];
    const testAccount31 = accounts[33];

    const planValue = 1000000000000000000000;
    const refComission = ((planValue) * (10 / 100));
    before(async function () {
        XtronInstance = await Xtron.new(owner)
    })
    describe(`Testcase:1-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        var uplinebonus = (refComission * (RefbonusUpline4 * 24))
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })
        it(`1.1.2.-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsbefore = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsbefore[2])).equal(0)
        })
        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(owner, { from: testAccount1, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
        it(`1.8-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsAfter[2])).equal(uplinebonus)
        })

    })
    describe(`Testcase:2-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore, accountbalAfter;
        var uplineBefore2, uplineBefore1;
        var uplineAfter2, uplineAfter1;
        var contractBalbefore;
        var contractBalAfter;
        var uplinebonus = ((refComission) * (RefbonusUpline4 * 24))
        var uplinebonus1 = ((refComission) * (RefbonusUpline4 * 10))
        var uplinebonus2 = ((refComission) * (RefbonusUpline4 * 38))
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineBefore2 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })
        it(`1.10-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsbefore1 = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsbefore1[2])).equal(uplinebonus)
        })
        it(`1.1.2.-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsbefore = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsbefore[2])).equal(uplinebonus)
        })
        it(`1.3-User2 invest function referer as user1 `, async () => {
            await XtronInstance.invest(testAccount1, { from: testAccount2, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineAfter1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineAfter2 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter1).equal(uplineBefore1)
        })
        it(`1.7-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter2).equal(uplineBefore2)
        })
        it(`1.8-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })

        it(`1.9-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter = await XtronInstance.userDetails(testAccount1)
            expect(Number(userDetailsAfter[2])).equal(uplinebonus1)
        })
        it(`1.10-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter1 = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsAfter1[2])).equal(uplinebonus2)
        })

    })
    describe(`Testcase:3-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore, accountbalAfter;
        var uplineBefore3, uplineBefore2, uplineBefore1;
        var uplineAfter3, uplineAfter2, uplineAfter1;
        var contractBalbefore;
        var contractBalAfter;
        var uplinebonus1 = ((refComission) * (RefbonusUpline4 * 10))
        var uplinebonus2 = ((refComission) * (RefbonusUpline4 * 15))
        var uplinebonus3 = ((refComission) * (RefbonusUpline4 * 47))
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineBefore2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineBefore3 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })
        it(`1.3-User2 invest function referer as user1 `, async () => {
            await XtronInstance.invest(testAccount2, { from: testAccount3, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineAfter1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineAfter2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineAfter3 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(Number(uplineAfter1)).equal(Number(uplineBefore1))
            expect(Number(uplineAfter2)).equal(Number(uplineBefore2))
            expect(Number(uplineAfter3)).equal(Number(uplineBefore3))
        })
        it(`1.8-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
        it(`1.9-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter1 = await XtronInstance.userDetails(testAccount2)
            let userDetailsAfter2 = await XtronInstance.userDetails(testAccount1)
            let userDetailsAfter3 = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsAfter1[2])).equal(uplinebonus1)
            expect(Number(userDetailsAfter2[2])).equal(uplinebonus2)
            expect(Number(userDetailsAfter3[2])).equal(uplinebonus3)
        })

    })
    describe(`Testcase:4-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore, accountbalAfter;
        var uplineBefore4, uplineBefore3, uplineBefore2, uplineBefore1;
        var uplineAfter4, uplineAfter3, uplineAfter2, uplineAfter1;
        var contractBalbefore;
        var contractBalAfter;
        var uplinebonus1 = ((planValue * 10 / 100) * (RefbonusUpline4 * 10))
        var uplinebonus2 = ((planValue * 10 / 100) * (RefbonusUpline4 * 15))
        var uplinebonus3 = ((planValue * 10 / 100) * 17 / 100)
        var uplinebonus4 = ((planValue * 10 / 100) * 54 / 100)
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineBefore2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineBefore3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineBefore4 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })
        it(`1.3-User2 invest function referer as user1 `, async () => {
            await XtronInstance.invest(testAccount3, { from: testAccount4, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineAfter1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineAfter2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineAfter3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineAfter4 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(Number(uplineAfter1)).equal(Number(uplineBefore1))
            expect(Number(uplineAfter2)).equal(Number(uplineBefore2))
            expect(Number(uplineAfter3)).equal(Number(uplineBefore3))
            expect(Number(uplineAfter4)).equal(Number(uplineBefore4))
        })
        it(`1.8-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
        it(`1.9-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter1 = await XtronInstance.userDetails(testAccount3)
            let userDetailsAfter2 = await XtronInstance.userDetails(testAccount2)
            let userDetailsAfter3 = await XtronInstance.userDetails(testAccount1)
            let userDetailsAfter4 = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsAfter1[2])).equal(uplinebonus1)
            expect(Number(userDetailsAfter2[2])).equal(uplinebonus2)
            expect(Number(userDetailsAfter3[2])).equal(uplinebonus3)
            expect(Number(userDetailsAfter4[2])).equal(uplinebonus4)
        })
    })
    describe(`Testcase:5-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore, accountbalAfter;
        var uplineBefore2, uplineBefore1;
        var uplineAfter2, uplineAfter1;
        var contractBalbefore;
        var contractBalAfter;
        var uplinebonus1 = ((planValue * 10 / 100) * (RefbonusUpline4 * 10))
        var uplinebonus2 = ((planValue * 10 / 100) * (RefbonusUpline4 * 15))
        var uplinebonus3 = ((planValue * 10 / 100) * 17 / 100)
        var uplinebonus4 = ((planValue * 10 / 100) * 18 / 100)
        var uplinebonus5 = ((planValue * 10 / 100) * 60 / 100)
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineBefore2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineBefore3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineBefore4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineBefore5 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })
        it(`1.3-User2 invest function referer as user1 `, async () => {
            await XtronInstance.invest(testAccount4, { from: testAccount5, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineAfter1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineAfter2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineAfter3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineAfter4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineAfter5 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(Number(uplineAfter1)).equal(Number(uplineBefore1))
            expect(Number(uplineAfter2)).equal(Number(uplineBefore2))
            expect(Number(uplineAfter3)).equal(Number(uplineBefore3))
            expect(Number(uplineAfter4)).equal(Number(uplineBefore4))
            expect(Number(uplineAfter5)).equal(Number(uplineBefore5))
        })

        it(`1.8-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })

        it(`1.9-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter1 = await XtronInstance.userDetails(testAccount4)
            let userDetailsAfter2 = await XtronInstance.userDetails(testAccount3)
            let userDetailsAfter3 = await XtronInstance.userDetails(testAccount2)
            let userDetailsAfter4 = await XtronInstance.userDetails(testAccount1)
            let userDetailsAfter5 = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsAfter1[2])).equal(uplinebonus1)
            expect(Number(userDetailsAfter2[2])).equal(uplinebonus2)
            expect(Number(userDetailsAfter3[2])).equal(uplinebonus3)
            expect(Number(userDetailsAfter4[2])).equal(uplinebonus4)
            expect(Number(userDetailsAfter5[2])).equal(uplinebonus5)
                ;
        })


    })
    describe(`Testcase:6-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore, accountbalAfter;
        var uplineBefore3, uplineBefore2, uplineBefore1;
        var uplineAfter3, uplineAfter2, uplineAfter1;
        var contractBalbefore;
        var contractBalAfter;
        var uplinebonus1 = ((planValue * 10 / 100) * (RefbonusUpline4 * 10))
        var uplinebonus2 = ((planValue * 10 / 100) * (RefbonusUpline4 * 15))
        var uplinebonus3 = ((planValue * 10 / 100) * 17 / 100)
        var uplinebonus4 = ((planValue * 10 / 100) * 18 / 100)
        var uplinebonus5 = ((planValue * 10 / 100) * 19 / 100)
        var uplinebonus6 = ((planValue * 10 / 100) * 65 / 100)
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineBefore2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineBefore3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineBefore4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineBefore5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineBefore6 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })
        it(`1.3-User2 invest function referer as user1 `, async () => {
            await XtronInstance.invest(testAccount5, { from: testAccount6, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            uplineAfter1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineAfter2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineAfter3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineAfter4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineAfter5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineAfter6 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(Number(uplineAfter1)).equal(Number(uplineBefore1))
            expect(Number(uplineAfter2)).equal(Number(uplineBefore2))
            expect(Number(uplineAfter3)).equal(Number(uplineBefore3))
            expect(Number(uplineAfter4)).equal(Number(uplineBefore4))
            expect(Number(uplineAfter5)).equal(Number(uplineBefore5))
            expect(Number(uplineAfter6)).equal(Number(uplineBefore6))
        })
        it(`1.8-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
        it(`1.9-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter1 = await XtronInstance.userDetails(testAccount5)
            let userDetailsAfter2 = await XtronInstance.userDetails(testAccount4)
            let userDetailsAfter3 = await XtronInstance.userDetails(testAccount3)
            let userDetailsAfter4 = await XtronInstance.userDetails(testAccount2)
            let userDetailsAfter5 = await XtronInstance.userDetails(testAccount1)
            let userDetailsAfter6 = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsAfter1[2])).equal(uplinebonus1)
            expect(Number(userDetailsAfter2[2])).equal(uplinebonus2)
            expect(Number(userDetailsAfter3[2])).equal(uplinebonus3)
            expect(Number(userDetailsAfter4[2])).equal(uplinebonus4)
            expect(Number(userDetailsAfter5[2])).equal(uplinebonus5)
            expect(Number(userDetailsAfter6[2])).equal(uplinebonus6)

        })

    })
    describe(`Testcase:7-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore, accountbalAfter;
        var uplineBefore3, uplineBefore2, uplineBefore1;
        var uplineAfter3, uplineAfter2, uplineAfter1;
        var contractBalbefore;
        var contractBalAfter;
        var uplinebonus1 = ((planValue * 10 / 100) * (RefbonusUpline4 * 10))
        var uplinebonus2 = ((planValue * 10 / 100) * (RefbonusUpline4 * 15))
        var uplinebonus3 = ((planValue * 10 / 100) * 17 / 100)
        var uplinebonus4 = ((planValue * 10 / 100) * 18 / 100)
        var uplinebonus5 = ((planValue * 10 / 100) * 19 / 100)
        var uplinebonus6 = ((planValue * 10 / 100) * 20 / 100)
        var uplinebonus7 = ((planValue * 10 / 100) * 69 / 100)
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount7)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            uplineBefore2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineBefore3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineBefore4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineBefore5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineBefore6 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineBefore7 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })
        it(`1.3-User2 invest function referer as user1 `, async () => {
            await XtronInstance.invest(testAccount6, { from: testAccount7, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount7)).toString())
            uplineAfter1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            uplineAfter2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineAfter3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineAfter4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineAfter5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineAfter6 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineAfter7 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(Number(uplineAfter1)).equal(Number(uplineBefore1))
            expect(Number(uplineAfter2)).equal(Number(uplineBefore2))
            expect(Number(uplineAfter3)).equal(Number(uplineBefore3))
            expect(Number(uplineAfter4)).equal(Number(uplineBefore4))
            expect(Number(uplineAfter5)).equal(Number(uplineBefore5))
            expect(Number(uplineAfter6)).equal(Number(uplineBefore6))
            expect(Number(uplineAfter7)).equal(Number(uplineBefore7))
        })
        it(`1.8-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
        it(`1.9-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter1 = await XtronInstance.userDetails(testAccount6)
            let userDetailsAfter2 = await XtronInstance.userDetails(testAccount5)
            let userDetailsAfter3 = await XtronInstance.userDetails(testAccount4)
            let userDetailsAfter4 = await XtronInstance.userDetails(testAccount3)
            let userDetailsAfter5 = await XtronInstance.userDetails(testAccount2)
            let userDetailsAfter6 = await XtronInstance.userDetails(testAccount1)
            let userDetailsAfter7 = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsAfter1[2])).equal(uplinebonus1)
            expect(Number(userDetailsAfter2[2])).equal(uplinebonus2)
            expect(Number(userDetailsAfter3[2])).equal(uplinebonus3)
            expect(Number(userDetailsAfter4[2])).equal(uplinebonus4)
            expect(Number(userDetailsAfter5[2])).equal(uplinebonus5)
            expect(Number(userDetailsAfter6[2])).equal(uplinebonus6)
            expect(Number(userDetailsAfter7[2])).equal(uplinebonus7)

        })
    })
    describe(`Testcase:8-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore, accountbalAfter;
        var contractBalbefore;
        var contractBalAfter;
        var uplinebonus1 = ((planValue * 10 / 100) * (RefbonusUpline4 * 10))
        var uplinebonus2 = ((planValue * 10 / 100) * (RefbonusUpline4 * 15))
        var uplinebonus3 = ((planValue * 10 / 100) * 17 / 100)
        var uplinebonus4 = ((planValue * 10 / 100) * 18 / 100)
        var uplinebonus5 = ((planValue * 10 / 100) * 19 / 100)
        var uplinebonus6 = ((planValue * 10 / 100) * 20 / 100)
        var uplinebonus7 = ((planValue * 10 / 100) * 21 / 100)
        var uplinebonus8 = ((planValue * 10 / 100) * 72 / 100)
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount8)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount7)).toString())
            uplineBefore2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            uplineBefore3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineBefore4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineBefore5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineBefore6 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineBefore7 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineBefore8 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })
        it(`1.3-User2 invest function referer as user1 `, async () => {
            await XtronInstance.invest(testAccount7, { from: testAccount8, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount8)).toString())
            uplineAfter1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount7)).toString())
            uplineAfter2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            uplineAfter3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineAfter4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineAfter5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineAfter6 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineAfter7 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineAfter8 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(Number(uplineAfter1)).equal(Number(uplineBefore1))
            expect(Number(uplineAfter2)).equal(Number(uplineBefore2))
            expect(Number(uplineAfter3)).equal(Number(uplineBefore3))
            expect(Number(uplineAfter4)).equal(Number(uplineBefore4))
            expect(Number(uplineAfter5)).equal(Number(uplineBefore5))
            expect(Number(uplineAfter6)).equal(Number(uplineBefore6))
            expect(Number(uplineAfter7)).equal(Number(uplineBefore7))
            expect(Number(uplineAfter8)).equal(Number(uplineBefore8))
        })
        it(`1.8-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
        it(`1.9-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter1 = await XtronInstance.userDetails(testAccount7)
            let userDetailsAfter2 = await XtronInstance.userDetails(testAccount6)
            let userDetailsAfter3 = await XtronInstance.userDetails(testAccount5)
            let userDetailsAfter4 = await XtronInstance.userDetails(testAccount4)
            let userDetailsAfter5 = await XtronInstance.userDetails(testAccount3)
            let userDetailsAfter6 = await XtronInstance.userDetails(testAccount2)
            let userDetailsAfter7 = await XtronInstance.userDetails(testAccount1)
            let userDetailsAfter8 = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsAfter1[2])).equal(uplinebonus1)
            expect(Number(userDetailsAfter2[2])).equal(uplinebonus2)
            expect(Number(userDetailsAfter3[2])).equal(uplinebonus3)
            expect(Number(userDetailsAfter4[2])).equal(uplinebonus4)
            expect(Number(userDetailsAfter5[2])).equal(uplinebonus5)
            expect(Number(userDetailsAfter6[2])).equal(uplinebonus6)
            expect(Number(userDetailsAfter7[2])).equal(uplinebonus7)
            expect(Number(userDetailsAfter8[2])).equal(uplinebonus8)

        })

    })
    describe(`Testcase:9-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore, accountbalAfter;
        var uplineBefore3, uplineBefore2, uplineBefore1;
        var uplineAfter3, uplineAfter2, uplineAfter1;
        var contractBalbefore;
        var contractBalAfter;
        var uplinebonus1 = ((planValue * 10 / 100) * (RefbonusUpline4 * 10))
        var uplinebonus2 = ((planValue * 10 / 100) * (RefbonusUpline4 * 15))
        var uplinebonus3 = ((planValue * 10 / 100) * 17 / 100)
        var uplinebonus4 = ((planValue * 10 / 100) * 18 / 100)
        var uplinebonus5 = ((planValue * 10 / 100) * 19 / 100)
        var uplinebonus6 = ((planValue * 10 / 100) * 20 / 100)
        var uplinebonus7 = ((planValue * 10 / 100) * 21 / 100)
        var uplinebonus8 = ((planValue * 10 / 100) * 22 / 100)
        var uplinebonus9 = ((planValue * 10 / 100) * 74 / 100)
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount9)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount8)).toString())
            uplineBefore2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount7)).toString())
            uplineBefore3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            uplineBefore4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineBefore5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineBefore6 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineBefore7 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineBefore8 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineBefore9 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })
        it(`1.3-User2 invest function referer as user1 `, async () => {
            await XtronInstance.invest(testAccount8, { from: testAccount9, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount9)).toString())
            uplineAfter1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount8)).toString())
            uplineAfter2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount7)).toString())
            uplineAfter3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            uplineAfter4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineAfter5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineAfter6 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineAfter7 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineAfter8 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineAfter9 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(Number(uplineAfter1)).equal(Number(uplineBefore1))
            expect(Number(uplineAfter2)).equal(Number(uplineBefore2))
            expect(Number(uplineAfter3)).equal(Number(uplineBefore3))
            expect(Number(uplineAfter4)).equal(Number(uplineBefore4))
            expect(Number(uplineAfter5)).equal(Number(uplineBefore5))
            expect(Number(uplineAfter6)).equal(Number(uplineBefore6))
            expect(Number(uplineAfter7)).equal(Number(uplineBefore7))
            expect(Number(uplineAfter8)).equal(Number(uplineBefore8))
            expect(Number(uplineAfter9)).equal(Number(uplineBefore9))
        })
        it(`1.8-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
        it(`1.9-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter1 = await XtronInstance.userDetails(testAccount8)
            let userDetailsAfter2 = await XtronInstance.userDetails(testAccount7)
            let userDetailsAfter3 = await XtronInstance.userDetails(testAccount6)
            let userDetailsAfter4 = await XtronInstance.userDetails(testAccount5)
            let userDetailsAfter5 = await XtronInstance.userDetails(testAccount4)
            let userDetailsAfter6 = await XtronInstance.userDetails(testAccount3)
            let userDetailsAfter7 = await XtronInstance.userDetails(testAccount2)
            let userDetailsAfter8 = await XtronInstance.userDetails(testAccount1)
            let userDetailsAfter9 = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsAfter1[2])).equal(uplinebonus1)
            expect(Number(userDetailsAfter2[2])).equal(uplinebonus2)
            expect(Number(userDetailsAfter3[2])).equal(uplinebonus3)
            expect(Number(userDetailsAfter4[2])).equal(uplinebonus4)
            expect(Number(userDetailsAfter5[2])).equal(uplinebonus5)
            expect(Number(userDetailsAfter6[2])).equal(uplinebonus6)
            expect(Number(userDetailsAfter7[2])).equal(uplinebonus7)
            expect(Number(userDetailsAfter8[2])).equal(uplinebonus8)
            expect(Number(userDetailsAfter9[2])).equal(uplinebonus9)

        })
    })
    describe(`Testcase:10-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore, accountbalAfter;
        var contractBalbefore;
        var contractBalAfter;
        var uplinebonus1 = ((planValue * 10 / 100) * (RefbonusUpline4 * 10))
        var uplinebonus2 = ((planValue * 10 / 100) * (RefbonusUpline4 * 15))
        var uplinebonus3 = ((planValue * 10 / 100) * 17 / 100)
        var uplinebonus4 = ((planValue * 10 / 100) * 18 / 100)
        var uplinebonus5 = ((planValue * 10 / 100) * 19 / 100)
        var uplinebonus6 = ((planValue * 10 / 100) * 20 / 100)
        var uplinebonus7 = ((planValue * 10 / 100) * 21 / 100)
        var uplinebonus8 = ((planValue * 10 / 100) * 22 / 100)
        var uplinebonus9 = ((planValue * 10 / 100) * 23 / 100)
        var uplinebonus10 = ((planValue * 10 / 100) * 75 / 100)
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount10)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount9)).toString())
            uplineBefore2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount8)).toString())
            uplineBefore3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount7)).toString())
            uplineBefore4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            uplineBefore5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineBefore6 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineBefore7 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineBefore8 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineBefore9 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineBefore10 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })
        it(`1.3-User2 invest function referer as user1 `, async () => {
            await XtronInstance.invest(testAccount9, { from: testAccount10, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount10)).toString())
            uplineAfter1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount9)).toString())
            uplineAfter2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount8)).toString())
            uplineAfter3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount7)).toString())
            uplineAfter4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            uplineAfter5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineAfter6 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineAfter7 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineAfter8 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineAfter9 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            uplineAfter10 = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(Number(uplineAfter1)).equal(Number(uplineBefore1))
            expect(Number(uplineAfter2)).equal(Number(uplineBefore2))
            expect(Number(uplineAfter3)).equal(Number(uplineBefore3))
            expect(Number(uplineAfter4)).equal(Number(uplineBefore4))
            expect(Number(uplineAfter5)).equal(Number(uplineBefore5))
            expect(Number(uplineAfter6)).equal(Number(uplineBefore6))
            expect(Number(uplineAfter7)).equal(Number(uplineBefore7))
            expect(Number(uplineAfter8)).equal(Number(uplineBefore8))
            expect(Number(uplineAfter9)).equal(Number(uplineBefore9))
        })
        it(`1.8-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
        it(`1.9-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter1 = await XtronInstance.userDetails(testAccount9)
            let userDetailsAfter2 = await XtronInstance.userDetails(testAccount8)
            let userDetailsAfter3 = await XtronInstance.userDetails(testAccount7)
            let userDetailsAfter4 = await XtronInstance.userDetails(testAccount6)
            let userDetailsAfter5 = await XtronInstance.userDetails(testAccount5)
            let userDetailsAfter6 = await XtronInstance.userDetails(testAccount4)
            let userDetailsAfter7 = await XtronInstance.userDetails(testAccount3)
            let userDetailsAfter8 = await XtronInstance.userDetails(testAccount2)
            let userDetailsAfter9 = await XtronInstance.userDetails(testAccount1)
            let userDetailsAfter10 = await XtronInstance.userDetails(owner)
            expect(Number(userDetailsAfter1[2])).equal(uplinebonus1)
            expect(Number(userDetailsAfter2[2])).equal(uplinebonus2)
            expect(Number(userDetailsAfter3[2])).equal(uplinebonus3)
            expect(Number(userDetailsAfter4[2])).equal(uplinebonus4)
            expect(Number(userDetailsAfter5[2])).equal(uplinebonus5)
            expect(Number(userDetailsAfter6[2])).equal(uplinebonus6)
            expect(Number(userDetailsAfter7[2])).equal(uplinebonus7)
            expect(Number(userDetailsAfter8[2])).equal(uplinebonus8)
            expect(Number(userDetailsAfter9[2])).equal(uplinebonus9)
            expect(Number(userDetailsAfter10[2])).equal(uplinebonus10)

        })

    })
    describe(`Testcase:11-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore, accountbalAfter;
        var contractBalbefore;
        var contractBalAfter;
        var uplinebonus1 = ((planValue * 10 / 100) * (RefbonusUpline4 * 10))
        var uplinebonus2 = ((planValue * 10 / 100) * (RefbonusUpline4 * 15))
        var uplinebonus3 = ((planValue * 10 / 100) * 17 / 100)
        var uplinebonus4 = ((planValue * 10 / 100) * 18 / 100)
        var uplinebonus5 = ((planValue * 10 / 100) * 19 / 100)
        var uplinebonus6 = ((planValue * 10 / 100) * 20 / 100)
        var uplinebonus7 = ((planValue * 10 / 100) * 21 / 100)
        var uplinebonus8 = ((planValue * 10 / 100) * 22 / 100)
        var uplinebonus9 = ((planValue * 10 / 100) * 23 / 100)
        var uplinebonus10 = ((planValue * 10 / 100) * 24 / 100)
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount11)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount10)).toString())
            uplineBefore2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount9)).toString())
            uplineBefore3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount8)).toString())
            uplineBefore4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount7)).toString())
            uplineBefore5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            uplineBefore6 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineBefore7 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineBefore8 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineBefore9 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineBefore10 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })
        it(`1.3-User2 invest function referer as user1 `, async () => {
            await XtronInstance.invest(testAccount10, { from: testAccount11, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount11)).toString())
            uplineAfter1 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount10)).toString())
            uplineAfter2 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount9)).toString())
            uplineAfter3 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount8)).toString())
            uplineAfter4 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount7)).toString())
            uplineAfter5 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount6)).toString())
            uplineAfter6 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount5)).toString())
            uplineAfter7 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount4)).toString())
            uplineAfter8 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount3)).toString())
            uplineAfter9 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount2)).toString())
            uplineAfter10 = await web3.utils.fromWei((await web3.eth.getBalance(testAccount1)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(Number(uplineAfter1)).equal(Number(uplineBefore1))
            expect(Number(uplineAfter2)).equal(Number(uplineBefore2))
            expect(Number(uplineAfter3)).equal(Number(uplineBefore3))
            expect(Number(uplineAfter4)).equal(Number(uplineBefore4))
            expect(Number(uplineAfter5)).equal(Number(uplineBefore5))
            expect(Number(uplineAfter6)).equal(Number(uplineBefore6))
            expect(Number(uplineAfter7)).equal(Number(uplineBefore7))
            expect(Number(uplineAfter8)).equal(Number(uplineBefore8))
            expect(Number(uplineAfter9)).equal(Number(uplineBefore9))
            expect(Number(uplineAfter10)).equal(Number(uplineBefore10))
        })
        it(`1.8-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
        it(`1.9-After Invest Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter1 = await XtronInstance.userDetails(testAccount10)
            let userDetailsAfter2 = await XtronInstance.userDetails(testAccount9)
            let userDetailsAfter3 = await XtronInstance.userDetails(testAccount8)
            let userDetailsAfter4 = await XtronInstance.userDetails(testAccount7)
            let userDetailsAfter5 = await XtronInstance.userDetails(testAccount6)
            let userDetailsAfter6 = await XtronInstance.userDetails(testAccount5)
            let userDetailsAfter7 = await XtronInstance.userDetails(testAccount4)
            let userDetailsAfter8 = await XtronInstance.userDetails(testAccount3)
            let userDetailsAfter9 = await XtronInstance.userDetails(testAccount2)
            let userDetailsAfter10 = await XtronInstance.userDetails(testAccount1)
            expect(Number(userDetailsAfter1[2])).equal(uplinebonus1)
            expect(Number(userDetailsAfter2[2])).equal(uplinebonus2)
            expect(Number(userDetailsAfter3[2])).equal(uplinebonus3)
            expect(Number(userDetailsAfter4[2])).equal(uplinebonus4)
            expect(Number(userDetailsAfter5[2])).equal(uplinebonus5)
            expect(Number(userDetailsAfter6[2])).equal(uplinebonus6)
            expect(Number(userDetailsAfter7[2])).equal(uplinebonus7)
            expect(Number(userDetailsAfter8[2])).equal(uplinebonus8)
            expect(Number(userDetailsAfter9[2])).equal(uplinebonus9)
            expect(Number(userDetailsAfter10[2])).equal(uplinebonus10)

        })
    })
    describe(`Testcase:12-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount12)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount11, { from: testAccount12, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount12)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:13-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount13)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount12, { from: testAccount13, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount13)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:14-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount14)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount13, { from: testAccount14, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount14)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:15-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount15)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount14, { from: testAccount15, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount15)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:16-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount16)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount15, { from: testAccount16, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount16)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:17-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount17)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount16, { from: testAccount17, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount17)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:18-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount18)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount17, { from: testAccount18, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount18)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:19-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount19)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount18, { from: testAccount19, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount19)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
    })
    describe(`Testcase:20-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount20)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount19, { from: testAccount20, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount20)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:21-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount21)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount20, { from: testAccount21, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount21)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:22-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount22)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount21, { from: testAccount22, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount22)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            // expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:23-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount23)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount22, { from: testAccount23, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount23)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:24-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount24)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount23, { from: testAccount24, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount24)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:25-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount25)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount24, { from: testAccount25, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount25)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:26-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount26)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount25, { from: testAccount26, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount26)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            // expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:27-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount27)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount26, { from: testAccount27, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount27)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
    })
    describe(`Testcase:28-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount28)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount27, { from: testAccount28, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount28)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:29-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount29)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount28, { from: testAccount29, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount29)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            // expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })


    })
    describe(`Testcase:30-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount30)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount29, { from: testAccount30, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount30)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            // expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
    })
    describe(`Testcase:31-User Invest Function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        it(`1.2-Before Invest Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount31)).toString())
            accountbalBefore = (Number(accountbalBefore) - Number(depositedValue))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) + Number(planValue))
        })

        it(`1.3-User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(testAccount30, { from: testAccount31, value: depositValue, gasPrice: '0' })
        })
        it(`1.4-After Invest Function Account_balance,Upline_balance,Contract_balance`, async () => {
            accountbalAfter = await web3.utils.fromWei((await web3.eth.getBalance(testAccount31)).toString())
            uplineAfter = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalAfter = await web3.eth.getBalance(XtronInstance.address)
        })
        it(`1.5-After Invest function AccountBalanceBefore planvalue will be less on AccountBalanceAfter`, async () => {
            expect(Number(accountbalAfter)).equal(Number(accountbalBefore))
        })
        it(`1.6-After Invest function Uplinebalancebefore will be same on UplinebalanceAfter`, async () => {
            expect(uplineAfter).equal(uplineBefore)
        })
        it(`1.7-After Invest function ContractBalanceBefore - ContractBalanceAfter planvalue will be added  in Contractbalance `, async () => {
            expect(Number(contractBalbefore)).equal(Number(contractBalAfter))
        })
    })
    describe(`TestAccount 1 30 direct Referers `, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        it(`Test account 1 - 30 direct referers`, async () => {
            for(i=34;i<=64;i++){
                await XtronInstance.invest(testAccount1, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 2 - 29 direct referers`, async () => {
            for(i=65;i<=94;i++){
                await XtronInstance.invest(testAccount2, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 3 - 28 direct referers`, async () => {
            for(i=95;i<=123;i++){
                await XtronInstance.invest(testAccount3, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 4 - 27 direct referers`, async () => {
            for(i=124;i<=151;i++){
                await XtronInstance.invest(testAccount4, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 5 - 26 direct referers`, async () => {
            for(i=152;i<=178;i++){
                await XtronInstance.invest(testAccount5, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 6 - 25 direct referers`, async () => {
            for(i=179;i<=204;i++){
                await XtronInstance.invest(testAccount6, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 7 - 24 direct referers`, async () => {
            for(i=205;i<=229;i++){
                await XtronInstance.invest(testAccount7, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 8 - 23 direct referers`, async () => {
            for(i=230;i<=253;i++){
                await XtronInstance.invest(testAccount8, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 9 - 22 direct referers`, async () => {
            for(i=254;i<=276;i++){
                await XtronInstance.invest(testAccount9, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 10 - 21 direct referers`, async () => {
            for(i=277;i<=298;i++){
                await XtronInstance.invest(testAccount10, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 11 - 20 direct referers`, async () => {
            for(i=299;i<=319;i++){
                await XtronInstance.invest(testAccount11, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 12 - 19 direct referers`, async () => {
            for(i=320;i<=339;i++){
                await XtronInstance.invest(testAccount12, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 13 - 18 direct referers`, async () => {
            for(i=340;i<=358;i++){
                await XtronInstance.invest(testAccount13, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 14 - 17 direct referers`, async () => {
            for(i=359;i<=376;i++){
                await XtronInstance.invest(testAccount14, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 15 - 16 direct referers`, async () => {
            for(i=377;i<=393;i++){
                await XtronInstance.invest(testAccount15, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 16 - 15 direct referers`, async () => {
            for(i=394;i<=409;i++){
                await XtronInstance.invest(testAccount16, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 17 - 14 direct referers`, async () => {
            for(i=410;i<=424;i++){
                await XtronInstance.invest(testAccount17, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 18 - 13 direct referers`, async () => {
            for(i=425;i<=438;i++){
                await XtronInstance.invest(testAccount18, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 19 - 12 direct referers`, async () => {
            for(i=439;i<=451;i++){
                await XtronInstance.invest(testAccount19, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 20 - 11 direct referers`, async () => {
            for(i=452;i<=463;i++){
                await XtronInstance.invest(testAccount20, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 21 - 10 direct referers`, async () => {
            for(i=464 ;i<=474;i++){
                await XtronInstance.invest(testAccount21, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 22 - 9 direct referers`, async () => {
            for(i=475;i<=484;i++){
                await XtronInstance.invest(testAccount22, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 23 - 8 direct referers`, async () => {
            for(i=485;i<=493;i++){
                await XtronInstance.invest(testAccount23, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 24 - 7 direct referers`, async () => {
            for(i=494;i<=501;i++){
                await XtronInstance.invest(testAccount24, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 25 - 6 direct referers`, async () => {
            for(i=502;i<=508;i++){
                await XtronInstance.invest(testAccount25, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 26 - 5 direct referers`, async () => {
            for(i=509;i<=514;i++){
                await XtronInstance.invest(testAccount26, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 27 - 4 direct referers`, async () => {
            for(i=515;i<=519;i++){
                await XtronInstance.invest(testAccount27, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 28 - 3 direct referers`, async () => {
            for(i=520;i<=523;i++){
                await XtronInstance.invest(testAccount28, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 29 - 2 direct referers`, async () => {
            for(i=524;i<=526;i++){
                await XtronInstance.invest(testAccount29, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
        it(`Test account 30 - 1 direct referers`, async () => {
            for(i=527;i<=528;i++){
                await XtronInstance.invest(testAccount30, { from: accounts[i], value: depositValue, gasPrice: '0' })
            }
        })
    })
    describe(`Testcase:3-User31 Withdraw Function`, async () => {
        let depositValue = "1000000000000000000000"
        var accountbalBefore;
        var accountbalAfter;
        var uplineBefore;
        var uplineAfter;
        var contractBalbefore;
        var contractBalAfter;
        const depositedValue = 1000;
        const withdrawbonus = (depositedValue * 1.5 / 100)
        var uplinebonus = ((refComission) * (RefbonusUpline4 * 24))
        var dailyroi = (planValue * 1.5 / 100)
        var dailyRoiEarning1 = (dailyroi * 25 / 100)
        var dailyRoiEarning2 = (dailyroi * 5 /100)
        var dailyRoiEarning3 = (dailyroi * 4 /100)
        var dailyRoiEarning4 = (dailyroi * 3 / 100)
        var dailyRoiEarning5 = (dailyroi * 2 /100)
        var dailyRoiEarning6 = (dailyroi * 1 /100)
        var dailyRoiEarning7 = (dailyroi * 0.5 /100)
        it(`2.2-Before withdraw Function Account Balance,Uplinebalance,ContractBalance`, async () => {
            accountbalBefore = await web3.utils.fromWei((await web3.eth.getBalance(testAccount31)).toString())
            accountbalBefore = (Number(accountbalBefore) + Number(39))
            uplineBefore = await web3.utils.fromWei((await web3.eth.getBalance(owner)).toString())
            contractBalbefore = await web3.eth.getBalance(XtronInstance.address)
            contractBalbefore = (Number(contractBalbefore) - Number(dailyroi))
        })
        it(`2.8-After Withdraw Function UserDetails view Function set in the variables`, async () => {
            let userDetailsbefore1 = await XtronInstance.userDetails(testAccount30)
            let userDetailsbefore2 = await XtronInstance.userDetails(testAccount29)
            let userDetailsbefore3 = await XtronInstance.userDetails(testAccount28)
            let userDetailsbefore4 = await XtronInstance.userDetails(testAccount27)
            let userDetailsbefore5 = await XtronInstance.userDetails(testAccount26)
            let userDetailsbefore6 = await XtronInstance.userDetails(testAccount25)
            let userDetailsbefore7 = await XtronInstance.userDetails(testAccount24)
            let userDetailsbefore8 = await XtronInstance.userDetails(testAccount23)
            let userDetailsbefore9 = await XtronInstance.userDetails(testAccount22)
            let userDetailsbefore10 = await XtronInstance.userDetails(testAccount21)
            let userDetailsbefore11 = await XtronInstance.userDetails(testAccount20)
            let userDetailsbefore12 = await XtronInstance.userDetails(testAccount19)
            let userDetailsbefore13 = await XtronInstance.userDetails(testAccount18)
            let userDetailsbefore14 = await XtronInstance.userDetails(testAccount17)
            let userDetailsbefore15 = await XtronInstance.userDetails(testAccount16)
            let userDetailsbefore16 = await XtronInstance.userDetails(testAccount15)
            let userDetailsbefore17 = await XtronInstance.userDetails(testAccount14)
            let userDetailsbefore18 = await XtronInstance.userDetails(testAccount13)
            let userDetailsbefore19 = await XtronInstance.userDetails(testAccount12)
            let userDetailsbefore20 = await XtronInstance.userDetails(testAccount11)
            let userDetailsbefore21 = await XtronInstance.userDetails(testAccount10)
            let userDetailsbefore22 = await XtronInstance.userDetails(testAccount9)
            let userDetailsbefore23 = await XtronInstance.userDetails(testAccount8)
            let userDetailsbefore24 = await XtronInstance.userDetails(testAccount7)
            let userDetailsbefore25 = await XtronInstance.userDetails(testAccount6)
            let userDetailsbefore26 = await XtronInstance.userDetails(testAccount5)
            let userDetailsbefore27 = await XtronInstance.userDetails(testAccount4)
            let userDetailsbefore28 = await XtronInstance.userDetails(testAccount3)
            let userDetailsbefore29 = await XtronInstance.userDetails(testAccount2)
            let userDetailsbefore30 = await XtronInstance.userDetails(testAccount1)
        })
        it(`2.3-User1 Withdraw function referer as owner `, async () => {
            var testTime = (await time.latest()).add(time.duration.days(1));
            time.increaseTo(testTime);
            await XtronInstance.userWithdraw({ from: testAccount31, gasPrice: '0' })
        })
    
        it(`2.8-After Withdraw Function UserDetails view Function set in the variables`, async () => {
            let userDetailsAfter1 = await XtronInstance.userDetails(testAccount30)
            let userDetailsAfter2 = await XtronInstance.userDetails(testAccount29)
            let userDetailsAfter3 = await XtronInstance.userDetails(testAccount28)
            let userDetailsAfter4 = await XtronInstance.userDetails(testAccount27)
            let userDetailsAfter5 = await XtronInstance.userDetails(testAccount26)
            let userDetailsAfter6 = await XtronInstance.userDetails(testAccount25)
            let userDetailsAfter7 = await XtronInstance.userDetails(testAccount24)
            let userDetailsAfter8 = await XtronInstance.userDetails(testAccount23)
            let userDetailsAfter9 = await XtronInstance.userDetails(testAccount22)
            let userDetailsAfter10 = await XtronInstance.userDetails(testAccount21)
            let userDetailsAfter11 = await XtronInstance.userDetails(testAccount20)
            let userDetailsAfter12 = await XtronInstance.userDetails(testAccount19)
            let userDetailsAfter13 = await XtronInstance.userDetails(testAccount18)
            let userDetailsAfter14 = await XtronInstance.userDetails(testAccount17)
            let userDetailsAfter15 = await XtronInstance.userDetails(testAccount16)
            let userDetailsAfter16 = await XtronInstance.userDetails(testAccount15)
            let userDetailsAfter17 = await XtronInstance.userDetails(testAccount14)
            let userDetailsAfter18 = await XtronInstance.userDetails(testAccount13)
            let userDetailsAfter19 = await XtronInstance.userDetails(testAccount12)
            let userDetailsAfter20 = await XtronInstance.userDetails(testAccount11)
            let userDetailsAfter21 = await XtronInstance.userDetails(testAccount10)
            let userDetailsAfter22 = await XtronInstance.userDetails(testAccount9)
            let userDetailsAfter23 = await XtronInstance.userDetails(testAccount8)
            let userDetailsAfter24 = await XtronInstance.userDetails(testAccount7)
            let userDetailsAfter25 = await XtronInstance.userDetails(testAccount6)
            let userDetailsAfter26 = await XtronInstance.userDetails(testAccount5)
            let userDetailsAfter27 = await XtronInstance.userDetails(testAccount4)
            let userDetailsAfter28 = await XtronInstance.userDetails(testAccount3)
            let userDetailsAfter29 = await XtronInstance.userDetails(testAccount2)
            let userDetailsAfter30 = await XtronInstance.userDetails(testAccount1)
            expect(Number(userDetailsAfter1[3])).equal(Number(dailyRoiEarning1))
            expect(Number(userDetailsAfter2[3])).equal(Number(dailyRoiEarning2))
            expect(Number(userDetailsAfter3[3])).equal(Number(dailyRoiEarning3))
            expect(Number(userDetailsAfter4[3])).equal(Number(dailyRoiEarning4))
            expect(Number(userDetailsAfter5[3])).equal(Number(dailyRoiEarning5))
            expect(Number(userDetailsAfter6[3])).equal(Number(dailyRoiEarning5))
            expect(Number(userDetailsAfter7[3])).equal(Number(dailyRoiEarning5))
            expect(Number(userDetailsAfter8[3])).equal(Number(dailyRoiEarning5))
            expect(Number(userDetailsAfter9[3])).equal(Number(dailyRoiEarning5))
            expect(Number(userDetailsAfter10[3])).equal(Number(dailyRoiEarning5))
            expect(Number(userDetailsAfter11[3])).equal(Number(dailyRoiEarning6))
            expect(Number(userDetailsAfter12[3])).equal(Number(dailyRoiEarning6))
            expect(Number(userDetailsAfter13[3])).equal(Number(dailyRoiEarning6))
            expect(Number(userDetailsAfter14[3])).equal(Number(dailyRoiEarning6))
            expect(Number(userDetailsAfter15[3])).equal(Number(dailyRoiEarning6))
            expect(Number(userDetailsAfter16[3])).equal(Number(dailyRoiEarning6))
            expect(Number(userDetailsAfter17[3])).equal(Number(dailyRoiEarning6))
            expect(Number(userDetailsAfter18[3])).equal(Number(dailyRoiEarning6))
            expect(Number(userDetailsAfter19[3])).equal(Number(dailyRoiEarning6))
            expect(Number(userDetailsAfter20[3])).equal(Number(dailyRoiEarning6))
            expect(Number(userDetailsAfter21[3])).equal(Number(dailyRoiEarning7))
            expect(Number(userDetailsAfter22[3])).equal(Number(dailyRoiEarning7))
            expect(Number(userDetailsAfter23[3])).equal(Number(dailyRoiEarning7))
            expect(Number(userDetailsAfter24[3])).equal(Number(dailyRoiEarning7))
            expect(Number(userDetailsAfter25[3])).equal(Number(dailyRoiEarning7))
            expect(Number(userDetailsAfter26[3])).equal(Number(dailyRoiEarning7))
            expect(Number(userDetailsAfter27[3])).equal(Number(dailyRoiEarning7))
            expect(Number(userDetailsAfter28[3])).equal(Number(dailyRoiEarning7))
            expect(Number(userDetailsAfter29[3])).equal(Number(dailyRoiEarning7))
            expect(Number(userDetailsAfter30[3])).equal(Number(dailyRoiEarning7))
        })
    })
})