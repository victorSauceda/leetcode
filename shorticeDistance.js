// Input: s = "loveleetcode", c = "e"

//
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
//

const shortestToChar = (s, c) => {
  const distances = Array(s.length).fill(0);
  distances[0] = s.length;
  var distance = s.length;
  for (var i = 0; i < s.length; ++i) {
    if (s[i] != c) {
      distances[i] = distance++;
    } else {
      // s[i] == c
      distances[i] = 0;
      distance = 1;
      for (var o = i - 1; o >= 0; --o) {
        if (distances[o] > distance) {
          distances[o] = distance++;
        } else {
          break;
        }
      }
      distance = 1;
    }
  }
  return distances;
};
