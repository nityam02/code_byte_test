const {
  deterministicPartitionKey,
  getEventCandidateHexDigest,
  parseEventCandidate
} = require("./dpk");

const {
  TRIVIAL_PARTITION_KEY,
} = require("./constant");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal hash key when given 50 input", () => {
    const trivialKey = deterministicPartitionKey(50);
    expect(trivialKey).toBe(
      "e55e36b58a817b0cc2729f0ffd22ac0d8ecf255abae0e545884b9508a68ece9c3e7fb7efff3c45913fc664668fa57b32e609abcdd439e9a8fd62fd8e1da738d6"
    );
  });
});

describe("getEventCandidateHexDigest", () => {
  it("Passing event with partitionKey ", () => {
    const event = {
      partitionKey: "197",
    };
    const hexDigest = getEventCandidateHexDigest(event);
    expect(hexDigest).toBe(event.partitionKey);
  });

  it("Passing empty event ", () => {
    const hexDigest = getEventCandidateHexDigest({});
    expect(hexDigest).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });
});


describe("parseEventCandidate", () => {
  it("Passing candidate as non-string", () => {
    const candidate = parseEventCandidate({});
    expect(candidate).toBe("{}");
  });

  it("Passing candidate as string ", () => {
    const hexDigest = parseEventCandidate("test");
    expect(hexDigest).toBe("test");
  });

  it("Passing no candidate ", () => {
    const hexDigest = parseEventCandidate();
    expect(hexDigest).toBe(TRIVIAL_PARTITION_KEY);
  });
});