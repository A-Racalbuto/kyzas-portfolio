const styles = ['Jazz', 'Bues'];
styles.push('Rock-n-Roll');
styles[(styles.length + 1) / 2 - 1] = 'Classics';
const removed = styles.shift();

console.log(removed, styles);

// styles.unshift('rap','Reggae')
// const newStyles=['rap','Reggae'].concat(styles)
const newStyles = ['Rap', 'Reggae', ...styles];
console.log(newStyles);
