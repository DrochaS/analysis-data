function combineUsers(...arrays) {
  // Flatten all user arrays into one array
  const users = arrays.flat();

  // Use ISO date format (YYYY-MM-DD), which is standard and easier to compare
  const merge_date = new Date().toISOString().split('T')[0];

  return {
    users,
    merge_date,
  };
}

module.exports = combineUsers;
