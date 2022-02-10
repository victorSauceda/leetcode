let bsearch = function (a, val) {
  let low = 0;
  let high = a.length - 1;
  var mid = Math.floor((low + high) / 2);
  while (mid > low && a[mid] != val) {
    if (a[mid] < val) {
      low = mid;
    } else if (a[mid] > val) {
      high = mid;
    }
    mid = Math.floor((low + high) / 2);
  }
  return mid;
};
var three_v2 = function (nums) {
  let output = [];
  nums = nums.sort((a, b) => {
    return a - b;
  });
  if (nums.length < 3 || nums[0] > 0) {
    return [];
  }
  var previous = nums[0] - 1;
  for (let i = 0; nums[i] <= 0; ++i) {
    if (nums[i] == previous) {
      continue;
    } else {
      previous = nums[i];
    }
    let left = Math.max(i + 1, bsearch(nums, Math.floor(-nums[i] / 2)));
    let right = left;
    if (nums[left] * 2 + nums[i] == 0) {
      if (left > i + 1 && nums[left - 1] == nums[left]) {
        left = left - 1;
      } else {
        right = left + 1;
      }
    } else if (left > i + 1 && nums[left] * 2 + nums[i] > 0) {
      left = left - 1;
    } else {
      right = left + 1;
    }
    while (left > i && right < nums.length) {
      while (left > i && nums[i] + nums[left] + nums[right] > 0) {
        left -= 1;
      }
      if (left > i) {
        while (right < nums.length && nums[i] + nums[left] + nums[right] < 0) {
          right += 1;
        }
      }
      if (
        left > i &&
        right < nums.length &&
        nums[i] + nums[left] + nums[right] == 0
      ) {
        var num_at_left = nums[left];
        var num_at_right = nums[right];
        output.push([nums[i], num_at_left, num_at_right]);
        while (left > i && nums[left] == num_at_left) {
          left -= 1;
        }
        while (right < nums.length && nums[right] == num_at_right) {
          right += 1;
        }
      }
      if (left <= i + 1 && nums[i] + nums[left] + nums[right] > 0) {
        break;
      }
      if (right + 1 >= nums.length && nums[i] + nums[left] + nums[right] < 0) {
        break;
      }
    }
  }
  return output;
};
