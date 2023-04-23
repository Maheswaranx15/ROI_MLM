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
    const testAccount32 = accounts[34];
    const testAccount33 = accounts[35];
    const testAccount34 = accounts[36];
    const testAccount35 = accounts[37];
    const testAccount36 = accounts[38];
    const testAccount37 = accounts[39];
    const planValue = 1000000000000000000000;
    const refComission = ((planValue) * (10 / 100));
    before(async function () {
        XtronInstance = await Xtron.new(owner)
    })
    describe(`Xtron_Negativecases - invest function`, async () => {
        let depositValue = "1000000000000000000000"
        const depositedValue = 1000;
        it(`Revert-Non Invested User will be properly reverted`, async () => {
            await expectRevert(XtronInstance.invest(testAccount2, { from: testAccount1, value: depositValue }), 'refer not exist')
        })
        it(`Revert-Zeroth address Invest User will be properly reverted`, async () => {
            await expectRevert(XtronInstance.invest(zeroAddress, { from: testAccount1, value: depositValue }), 'refer not exist')
        })
        it(`Revert-Minimum Invest Amount  will be properly reverted`, async () => {
            await expectRevert(XtronInstance.invest(owner, { from: testAccount1, value: depositedValue }), 'Given amount less than minimum amount')
        })
        it(`User1 invest function referer as owner `, async () => {
            await XtronInstance.invest(owner, { from: testAccount1, value: depositValue, gasPrice: '0' })
        })
        it(`Revert-User1 Reinvest function referer as owner without withdrawl`, async () => {
            await expectRevert(XtronInstance.invest(owner, { from: testAccount1, value: "1000000000000000000000", gasPrice: '0' }), 'user already exist')
        })

    })
    describe(`Xtron - WithdrawlFunction`, async () => {
        it(`Revert-Withdrawl Function non deposited user will be properly reverted`, async () => {
            await expectRevert(XtronInstance.userWithdraw({ from: testAccount2, gasPrice: '0' }), 'Full payouts')
        })  
    })
})