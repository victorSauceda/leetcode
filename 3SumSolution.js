var three = function (nums) {
  if (nums.length < 3) return [];
  let output = [];
  for (let i = 0; i < nums.length - 2; ++i) {
    for (let j = i + 1; j < nums.length - 1; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          output.push([nums[i], nums[j], nums[k]].sort());
        }
      }
    }
  }

  if (output.length == 0) return [];

  output.sort();

  var recent_output = output[0];
  var filtered = [recent_output];
  for (const idx in output) {
    var equal = true;
    const cur_output = output[idx];
    for (const inner_idx in cur_output) {
      if (recent_output[inner_idx] != cur_output[inner_idx]) {
        equal = false;
        break;
      }
    }
    if (!equal) {
      recent_output = cur_output;
      filtered.push(recent_output);
    }
  }
  output = filtered;

  return output;
};
