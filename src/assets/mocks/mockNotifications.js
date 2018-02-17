export const mockNotifications = [
  {
    address: '0xa7c01459e152881e3d70aa4106b2d006415690dd',
    abi: [
      {
        constant: false,
        inputs: [
          {
            name: '_message',
            type: 'bytes32',
          },
        ],
        name: 'hack',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: '_from',
            type: 'address',
          },
          {
            indexed: false,
            name: '_message',
            type: 'bytes32',
          },
        ],
        name: 'LogHack',
        type: 'event',
      },
    ],
    phoneNumber: '9135159867',
    watch_type: 'contract',
    nonce: 0,
  },
  {
    address: '0x3Ba431a29E4093Ab34E44aEAbb6aFc62747B0444',
    abi: [],
    phoneNumber: '9135159867',
    watch_type: 'account',
    nonce: 0,
  },
];

export default mockNotifications;
