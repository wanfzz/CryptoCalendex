const Web3 = require('web3');

// 初始化 Web3 实例
const web3 = new Web3('https://eth-mainnet.alchemyapi.io/v2/Cl9JZPpOZYRf6UcQ6GopCeQAhSOvo_b5');

/**
 * 查询链上 gas 数据的函数
 * @param {number} blockNumber 查询的区块号
 * @returns {Promise<object>} 包含 gas 数据的对象
 */
async function getGasData(blockNumber) {
  try {
    // 获取指定区块号的区块信息
    const block = await web3.eth.getBlock(blockNumber);
    // 构造返回对象
    const gasData = {
      gasLimit: block.gasLimit,
      gasUsed: block.gasUsed,
      gasPrice: await web3.eth.getGasPrice()
    };
    
    return gasData;
  } catch (error) {
    throw new Error('Failed to get gas data: ' + error.message);
  }
}

module.exports = { getGasData };