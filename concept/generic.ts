interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const obj = loggingIdentity({ length: 10, value: "hello" });

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

function displayKeyValue<K, V>(pair: KeyValuePair<K, V>): void {
  console.log(`Key: ${pair.key}, Value: ${pair.value}`);
}

const pair: KeyValuePair<string, number> = { key: "age", value: 30 };
displayKeyValue(pair);
