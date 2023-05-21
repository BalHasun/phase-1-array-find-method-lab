function superbowlWin(Array) {
  const result = Array.find((record) => record.result === "W");
  return result ? result.year : undefined;
}
