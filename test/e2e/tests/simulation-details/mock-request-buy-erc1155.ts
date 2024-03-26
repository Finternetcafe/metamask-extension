import { MockRequestResponse, SENDER_ADDRESS_MOCK, SENDER_ADDRESS_NO_0x_MOCK } from "./types";

export const BUY_ERC1155_TRANSACTION_MOCK = {
  "data": "0xe7acab24000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000006200000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000005200000000000000000000000000000000000000000000000000000000000000580000000000000000000000000a0d884d99316d14d7727a6a9223a8266a4595468000000000000000000000000004c00500000ad104d7dbd00e3ae0a5c00560c000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000065e517b200000000000000000000000000000000000000000000000000000000660de8220000000000000000000000000000000000000000000000000000000000000000360c6ebe0000000000000000000000000000000000000000187d7f63de4580450000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000300000000000000000000000076be3b62873462d2142405439777e971754e8e77000000000000000000000000000000000000000000000000000000000000286400000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000059874438570000000000000000000000000000000000000000000000000000005987443857000000000000000000000000000a0d884d99316d14d7727a6a9223a8266a4595468000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028ed6103d000000000000000000000000000000000000000000000000000000028ed6103d0000000000000000000000000000000a26b00c1f0df003000390027140000faa7190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a3b5840f40000000000000000000000000000000000000000000000000000000a3b5840f4000000000000000000000000000157e23d3e68ac6f99334b8b0fe71f0eb844911dd0000000000000000000000000000000000000000000000000000000000000040100fc5b608d71976e87680aa0b785ae11ac8b9004316b9721222a5d6bea2c7a346d74d85776450c82d2ee3e4fa24eb8d612f5975a577789ad2b58dfc6a6e49760000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000360c6ebe",
  "from": SENDER_ADDRESS_MOCK,
  "maxFeePerGas": "0x0",
  "maxPriorityFeePerGas": "0x0",
  "to": "0x00000000000000adc04c56bf30ac9d3c0aaf14dc",
  "value": "0x19945ca262000"
};

export const BUY_ERC1155_REQUEST_1_MOCK: MockRequestResponse = {
  request: {
    "id": "0",
    "jsonrpc": "2.0",
    "method": "infura_simulateTransactions",
    "params": [
      {
        "transactions": [BUY_ERC1155_TRANSACTION_MOCK],
        "withCallTrace": true,
        "withLogs": true
      }
    ]
  },
  response: {
    "jsonrpc": "2.0",
    "result": {
      "transactions": [
        {
          "return": "0x0000000000000000000000000000000000000000000000000000000000000001",
          "status": "0x1",
          "gasUsed": "0x25f36",
          "gasLimit": "0x2759d",
          "fees": [
            {
              "maxFeePerGas": "0x0",
              "maxPriorityFeePerGas": "0x0",
              "balanceNeeded": "0x19945ca262000",
              "currentBalance": "0x32795c83616e692",
              "error": ""
            }
          ],
          "stateDiff": {
            "post": {
              "0x00000000000000adc04c56bf30ac9d3c0aaf14dc": {
                "storage": {
                  "0x4c72287b4ec27ed52187d8d12dd2efcc80b62258ecd302f3a49cc31b5e309c12": "0x0000000000000000000000000000040000000000000000000000000000010001"
                }
              },
              "0x0000a26b00c1f0df003000390027140000faa719": {
                "balance": "0x366ca9f378bea7f25"
              },
              "0x157e23d3e68ac6f99334b8b0fe71f0eb844911dd": {
                "balance": "0x2866997b0e4edc141"
              },
              [SENDER_ADDRESS_MOCK]: {
                "balance": "0x325fc826bf0c692",
                "nonce": "0x3bc"
              },
              "0x76be3b62873462d2142405439777e971754e8e77": {
                "storage": {
                  "0x3796904d67106d2573261f46f55a01017a279e51efbe4fc47d78ed4f984f2c79": "0x0000000000000000000000000000000000000000000000000000000000000001",
                  "0x55052ce5c7ff3ae88fff66c1ed7bba5d2e8349a1787d18f50854e16e886b2445": "0x0000000000000000000000000000000000000000000000000000000000000003"
                }
              },
              "0xa0d884d99316d14d7727a6a9223a8266a4595468": {
                "balance": "0xd1563f4a6c5a8"
              }
            },
            "pre": {
              "0x00000000000000adc04c56bf30ac9d3c0aaf14dc": {
                "balance": "0x0",
                "nonce": "0x1"
              },
              "0x0000a26b00c1f0df003000390027140000faa719": {
                "balance": "0x366ca94fc33a98b25",
                "nonce": "0x1"
              },
              "0x157e23d3e68ac6f99334b8b0fe71f0eb844911dd": {
                "balance": "0x286696ec383e9f141",
                "nonce": "0x18"
              },
              [SENDER_ADDRESS_MOCK]: {
                "balance": "0x32795c83616e692",
                "nonce": "0x3bb"
              },
              "0x76be3b62873462d2142405439777e971754e8e77": {
                "balance": "0x0",
                "nonce": "0x1",
                "storage": {
                  "0x55052ce5c7ff3ae88fff66c1ed7bba5d2e8349a1787d18f50854e16e886b2445": "0x0000000000000000000000000000000000000000000000000000000000000004"
                }
              },
              "0xa0d884d99316d14d7727a6a9223a8266a4595468": {
                "balance": "0xbaf46e3c569a8",
                "nonce": "0x12fc"
              }
            }
          },
          "callTrace": {
            "from": SENDER_ADDRESS_MOCK,
            "to": "0x00000000000000adc04c56bf30ac9d3c0aaf14dc",
            "type": "CALL",
            "gas": "0x1dcd6500",
            "gasUsed": "0x25f36",
            "value": "0x19945ca262000",
            "input": "0xe7acab24000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000006200000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000005200000000000000000000000000000000000000000000000000000000000000580000000000000000000000000a0d884d99316d14d7727a6a9223a8266a4595468000000000000000000000000004c00500000ad104d7dbd00e3ae0a5c00560c000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000065e517b200000000000000000000000000000000000000000000000000000000660de8220000000000000000000000000000000000000000000000000000000000000000360c6ebe0000000000000000000000000000000000000000187d7f63de4580450000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000300000000000000000000000076be3b62873462d2142405439777e971754e8e77000000000000000000000000000000000000000000000000000000000000286400000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000059874438570000000000000000000000000000000000000000000000000000005987443857000000000000000000000000000a0d884d99316d14d7727a6a9223a8266a4595468000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028ed6103d000000000000000000000000000000000000000000000000000000028ed6103d0000000000000000000000000000000a26b00c1f0df003000390027140000faa7190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a3b5840f40000000000000000000000000000000000000000000000000000000a3b5840f4000000000000000000000000000157e23d3e68ac6f99334b8b0fe71f0eb844911dd0000000000000000000000000000000000000000000000000000000000000040100fc5b608d71976e87680aa0b785ae11ac8b9004316b9721222a5d6bea2c7a346d74d85776450c82d2ee3e4fa24eb8d612f5975a577789ad2b58dfc6a6e49760000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000360c6ebe",
            "output": "0x0000000000000000000000000000000000000000000000000000000000000001",
            "error": "",
            "calls": [
              {
                "from": "0x00000000000000adc04c56bf30ac9d3c0aaf14dc",
                "to": "0x0000000000000000000000000000000000000001",
                "type": "STATICCALL",
                "gas": "0x1d557faf",
                "gasUsed": "0xbb8",
                "value": null,
                "input": "0x0ed016b9310bbb571c96e8b4b9fa9758005b6b990c2d7a77993a345d522a9d51000000000000000000000000000000000000000000000000000000000000001b100fc5b608d71976e87680aa0b785ae11ac8b9004316b9721222a5d6bea2c7a346d74d85776450c82d2ee3e4fa24eb8d612f5975a577789ad2b58dfc6a6e4976",
                "output": "0x000000000000000000000000a0d884d99316d14d7727a6a9223a8266a4595468",
                "error": "",
                "calls": null
              },
              {
                "from": "0x00000000000000adc04c56bf30ac9d3c0aaf14dc",
                "to": "0xa0d884d99316d14d7727a6a9223a8266a4595468",
                "type": "CALL",
                "gas": "0x1d54ee52",
                "gasUsed": "0x0",
                "value": "0x1661d10e15c00",
                "input": "0x",
                "output": "0x",
                "error": "",
                "calls": null
              },
              {
                "from": "0x00000000000000adc04c56bf30ac9d3c0aaf14dc",
                "to": "0x0000a26b00c1f0df003000390027140000faa719",
                "type": "CALL",
                "gas": "0x1d54c690",
                "gasUsed": "0x55",
                "value": "0xa3b5840f400",
                "input": "0x",
                "output": "0x",
                "error": "",
                "calls": null
              },
              {
                "from": "0x00000000000000adc04c56bf30ac9d3c0aaf14dc",
                "to": "0x157e23d3e68ac6f99334b8b0fe71f0eb844911dd",
                "type": "CALL",
                "gas": "0x1d549e7b",
                "gasUsed": "0x0",
                "value": "0x28ed6103d000",
                "input": "0x",
                "output": "0x",
                "error": "",
                "calls": null
              },
              {
                "from": "0x00000000000000adc04c56bf30ac9d3c0aaf14dc",
                "to": "0x1e0049783f008a0085193e00003d00cd54003c71",
                "type": "CALL",
                "gas": "0x1d549301",
                "gasUsed": "0x9ea5",
                "value": "0x0",
                "input": `0x4ce34aa200000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000300000000000000000000000076be3b62873462d2142405439777e971754e8e77000000000000000000000000a0d884d99316d14d7727a6a9223a8266a4595468000000000000000000000000${SENDER_ADDRESS_NO_0x_MOCK}00000000000000000000000000000000000000000000000000000000000028640000000000000000000000000000000000000000000000000000000000000001`,
                "output": "0x4ce34aa200000000000000000000000000000000000000000000000000000000",
                "error": "",
                "calls": [
                  {
                    "from": "0x1e0049783f008a0085193e00003d00cd54003c71",
                    "to": "0x76be3b62873462d2142405439777e971754e8e77",
                    "type": "CALL",
                    "gas": "0x1cdf28f7",
                    "gasUsed": "0x8602",
                    "value": "0x0",
                    "input": `0xf242432a000000000000000000000000a0d884d99316d14d7727a6a9223a8266a4595468000000000000000000000000${SENDER_ADDRESS_NO_0x_MOCK}0000000000000000000000000000000000000000000000000000000000002864000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000`,
                    "output": "0x",
                    "error": "",
                    "calls": null,
                    "logs": [
                      {
                        "address": "0x76be3b62873462d2142405439777e971754e8e77",
                        "topics": [
                          "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
                          "0x0000000000000000000000001e0049783f008a0085193e00003d00cd54003c71",
                          "0x000000000000000000000000a0d884d99316d14d7727a6a9223a8266a4595468",
                          `0x000000000000000000000000${SENDER_ADDRESS_NO_0x_MOCK}`
                        ],
                        "data": "0x00000000000000000000000000000000000000000000000000000000000028640000000000000000000000000000000000000000000000000000000000000001"
                      }
                    ]
                  }
                ]
              }
            ],
            "logs": [
              {
                "address": "0x00000000000000adc04c56bf30ac9d3c0aaf14dc",
                "topics": [
                  "0x9d9af8e38d66c62e2c12f0225249fd9d721c54b83f48d9352c97c6cacdcb6f31",
                  "0x000000000000000000000000a0d884d99316d14d7727a6a9223a8266a4595468",
                  "0x000000000000000000000000004c00500000ad104d7dbd00e3ae0a5c00560c00"
                ],
                "data": `0x6ea6470ec24d1cbb4feec79a3bd903fa824925509bf6e1d658be4da525b7d8c9000000000000000000000000${SENDER_ADDRESS_NO_0x_MOCK}000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000300000000000000000000000076be3b62873462d2142405439777e971754e8e770000000000000000000000000000000000000000000000000000000000002864000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001661d10e15c00000000000000000000000000a0d884d99316d14d7727a6a9223a8266a459546800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a3b5840f4000000000000000000000000000000a26b00c1f0df003000390027140000faa719000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028ed6103d000000000000000000000000000157e23d3e68ac6f99334b8b0fe71f0eb844911dd`
              }
            ]
          },
          "feeEstimate": 6631084132695242,
          "baseFeePerGas": 42658441727
        }
      ],
      "blockNumber": "0x12967f2",
      "id": "e51ab092-77f2-40f5-9161-c883694ab092"
    },
    "id": "0"
  },
};

export const BUY_ERC1155_REQUEST_2_MOCK = {
  request: {
    "id": "1",
    "jsonrpc": "2.0",
    "method": "infura_simulateTransactions",
    "params": [
      {
        "transactions": [
          {
            "from": SENDER_ADDRESS_MOCK,
            "to": "0x76be3b62873462d2142405439777e971754e8e77",
            "data": `0x00fdd58e000000000000000000000000${SENDER_ADDRESS_NO_0x_MOCK}0000000000000000000000000000000000000000000000000000000000002864`
          },
          {
            "chainId": "0x1",
            "from": SENDER_ADDRESS_MOCK,
            "to": "0x00000000000000adc04c56bf30ac9d3c0aaf14dc",
            "value": "0x19945ca262000",
            "data": "0xe7acab24000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000006200000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000005200000000000000000000000000000000000000000000000000000000000000580000000000000000000000000a0d884d99316d14d7727a6a9223a8266a4595468000000000000000000000000004c00500000ad104d7dbd00e3ae0a5c00560c000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000065e517b200000000000000000000000000000000000000000000000000000000660de8220000000000000000000000000000000000000000000000000000000000000000360c6ebe0000000000000000000000000000000000000000187d7f63de4580450000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000300000000000000000000000076be3b62873462d2142405439777e971754e8e77000000000000000000000000000000000000000000000000000000000000286400000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000059874438570000000000000000000000000000000000000000000000000000005987443857000000000000000000000000000a0d884d99316d14d7727a6a9223a8266a4595468000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028ed6103d000000000000000000000000000000000000000000000000000000028ed6103d0000000000000000000000000000000a26b00c1f0df003000390027140000faa7190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a3b5840f40000000000000000000000000000000000000000000000000000000a3b5840f4000000000000000000000000000157e23d3e68ac6f99334b8b0fe71f0eb844911dd0000000000000000000000000000000000000000000000000000000000000040100fc5b608d71976e87680aa0b785ae11ac8b9004316b9721222a5d6bea2c7a346d74d85776450c82d2ee3e4fa24eb8d612f5975a577789ad2b58dfc6a6e49760000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000360c6ebe"
          },
          {
            "from": SENDER_ADDRESS_MOCK,
            "to": "0x76be3b62873462d2142405439777e971754e8e77",
            "data": `0x00fdd58e000000000000000000000000${SENDER_ADDRESS_NO_0x_MOCK}0000000000000000000000000000000000000000000000000000000000002864`
          }
        ]
      }
    ]
  },
  response: {
    "jsonrpc": "2.0",
    "result": {
      "transactions": [
        {
          "return": "0x0000000000000000000000000000000000000000000000000000000000000000",
          "status": "0x1",
          "gasUsed": "0x6014",
          "gasLimit": "0x6167",
          "fees": [
            {
              "maxFeePerGas": "0xfebde1167",
              "maxPriorityFeePerGas": "0x30c3be3",
              "balanceNeeded": "0x60ec70af168d8",
              "currentBalance": "0x32795c83616e692",
              "error": ""
            }
          ],
          "stateDiff": {
            "post": {
              [SENDER_ADDRESS_MOCK]: {
                "nonce": "0x3bc"
              }
            },
            "pre": {
              [SENDER_ADDRESS_MOCK]: {
                "balance": "0x32795c83616e692",
                "nonce": "0x3bb"
              }
            }
          },
          "feeEstimate": 1049251628741888,
          "baseFeePerGas": 42658441727
        },
        {
          "return": "0x0000000000000000000000000000000000000000000000000000000000000001",
          "status": "0x1",
          "gasUsed": "0x25f36",
          "gasLimit": "0x2759d",
          "fees": [
            {
              "maxFeePerGas": "0xfebde1167",
              "maxPriorityFeePerGas": "0x30c3be3",
              "balanceNeeded": "0x28c192121b54c8",
              "currentBalance": "0x32187012b257dba",
              "error": ""
            }
          ],
          "stateDiff": {
            "post": {
              "0x00000000000000adc04c56bf30ac9d3c0aaf14dc": {
                "storage": {
                  "0x4c72287b4ec27ed52187d8d12dd2efcc80b62258ecd302f3a49cc31b5e309c12": "0x0000000000000000000000000000040000000000000000000000000000010001"
                }
              },
              "0x0000a26b00c1f0df003000390027140000faa719": {
                "balance": "0x366ca9f378bea7f25"
              },
              "0x157e23d3e68ac6f99334b8b0fe71f0eb844911dd": {
                "balance": "0x2866997b0e4edc141"
              },
              [SENDER_ADDRESS_MOCK]: {
                "balance": "0x325fc826bf0c692",
                "nonce": "0x3bd"
              },
              "0x76be3b62873462d2142405439777e971754e8e77": {
                "storage": {
                  "0x3796904d67106d2573261f46f55a01017a279e51efbe4fc47d78ed4f984f2c79": "0x0000000000000000000000000000000000000000000000000000000000000001",
                  "0x55052ce5c7ff3ae88fff66c1ed7bba5d2e8349a1787d18f50854e16e886b2445": "0x0000000000000000000000000000000000000000000000000000000000000003"
                }
              },
              "0xa0d884d99316d14d7727a6a9223a8266a4595468": {
                "balance": "0xd1563f4a6c5a8"
              }
            },
            "pre": {
              "0x00000000000000adc04c56bf30ac9d3c0aaf14dc": {
                "balance": "0x0",
                "nonce": "0x1"
              },
              "0x0000a26b00c1f0df003000390027140000faa719": {
                "balance": "0x366ca94fc33a98b25",
                "nonce": "0x1"
              },
              "0x157e23d3e68ac6f99334b8b0fe71f0eb844911dd": {
                "balance": "0x286696ec383e9f141",
                "nonce": "0x18"
              },
              [SENDER_ADDRESS_MOCK]: {
                "balance": "0x32795c83616e692",
                "nonce": "0x3bc"
              },
              "0x76be3b62873462d2142405439777e971754e8e77": {
                "balance": "0x0",
                "nonce": "0x1",
                "storage": {
                  "0x55052ce5c7ff3ae88fff66c1ed7bba5d2e8349a1787d18f50854e16e886b2445": "0x0000000000000000000000000000000000000000000000000000000000000004"
                }
              },
              "0xa0d884d99316d14d7727a6a9223a8266a4595468": {
                "balance": "0xbaf46e3c569a8",
                "nonce": "0x12fc"
              }
            }
          },
          "feeEstimate": 6631239578850688,
          "baseFeePerGas": 42658441727
        },
        {
          "return": "0x0000000000000000000000000000000000000000000000000000000000000001",
          "status": "0x1",
          "gasUsed": "0x6014",
          "gasLimit": "0x6167",
          "fees": [
            {
              "maxFeePerGas": "0xfebde1167",
              "maxPriorityFeePerGas": "0x30c3be3",
              "balanceNeeded": "0x60ec70af168d8",
              "currentBalance": "0x2f8c56f190a28f2",
              "error": ""
            }
          ],
          "stateDiff": {
            "post": {
              [SENDER_ADDRESS_MOCK]: {
                "nonce": "0x3be"
              }
            },
            "pre": {
              [SENDER_ADDRESS_MOCK]: {
                "balance": "0x325fc826bf0c692",
                "nonce": "0x3bd"
              }
            }
          },
          "feeEstimate": 1049251628741888,
          "baseFeePerGas": 42658441727
        }
      ],
      "blockNumber": "0x12967f2",
      "id": "bcf1a9f6-3f97-456c-a2d9-2ec7d5893bcb"
    },
    "id": "1"
  },
};