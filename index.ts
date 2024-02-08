export function yahtzee_score(dice: number[]) {
  if (dice.length !== 5)
    throw new Error("Invalid input. dice array must contain 5 values")

  const max = Math.max(...dice);
  if (max > 6)
    throw new Error("Invalid input. dice array not contain values greater than 6")
  const min = Math.min(...dice);
  if (max < 1)
    throw new Error("Invalid input. dice array not contain values less than 1")

  const counts = Array(6).fill(0);

  // Count how of each value there is
  dice.forEach(d => counts[d - 1] += 1);

  // Yahtzee
  if (counts.lastIndexOf(5) !== -1)
    return { score: 50, type: 'yahtzee' }

  // Four of a kind
  const fourOfThisKind = counts.lastIndexOf(4) + 1;
  if (fourOfThisKind)
    return { score: 4 * fourOfThisKind, type: 'four of a kind' }

  const threeOfThisKind = counts.lastIndexOf(3) + 1;
  const bestPair = counts.lastIndexOf(2) + 1;
  const worstPair = counts.indexOf(2) + 1;

  // Full house
  if (threeOfThisKind && bestPair)
    return { score: 3 * threeOfThisKind + 2 * bestPair, type: 'full house' }

  //big straight
  if (counts[1] >= 1 && counts[2] >= 1 && counts[3] >= 1 && counts[4] >= 1 && counts[5] >= 1)
    return { score: 20, type: 'big straight' }

  //small straight
  if (counts[0] >= 1 && counts[1] >= 1 && counts[2] >= 1 && counts[3] >= 1 && counts[4] >= 1)
    return { score: 15, type: 'small straight' }

  // Three of a kind
  if (threeOfThisKind)
    return { score: 3 * threeOfThisKind, type: 'three of a kind' }

  // Two pairs
  if (bestPair && worstPair && bestPair !== worstPair)
    return { score: 2 * bestPair + 2 * worstPair, type: 'two pairs' }

  // One pair
  if (bestPair)
    return { score: 2 * bestPair, type: 'pair' }

  return { score: 0, type: 'nothing' }
}