const {
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
} = require("./constant");

const { getHexDigest } = require("./utils");

const getEventCandidateHexDigest = (event) => {
  if (event) {
    if (event.partitionKey) {
      return event.partitionKey;
    }
    const data = JSON.stringify(event);
    return getHexDigest(data);
  }
};

const parseEventCandidate = (candidate) => {
  if (candidate && typeof candidate !== "string") {
    return JSON.stringify(candidate);
  }
  if (candidate) return candidate;
  return TRIVIAL_PARTITION_KEY;
};

const deterministicPartitionKey = (event) => {
  let candidate = getEventCandidateHexDigest(event);
  candidate = parseEventCandidate(candidate);
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = getHexDigest(candidate);
  }
  return candidate;
};

module.exports = { getEventCandidateHexDigest, parseEventCandidate,deterministicPartitionKey };
