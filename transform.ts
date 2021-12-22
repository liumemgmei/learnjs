export type MapData = {
	label: string;
	value: string | number;
	[key: string]: any;
};

export const toMapData = (data: object, valueIsLabel?: boolean): MapData[] =>
	Object.keys(data).map((i: any) => ({ label: data[i], value: valueIsLabel ? data[i] : isNaN(i) ? i : parseInt(i) }));

export const toObject = (arr, key, target?) => {
	const obj = {};
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		if (target) {
			obj[element[key]] =
				typeof obj[element[key]] === 'undefined' ? element[target] : [].concat(obj[element[key]], element[target]);
		} else {
			obj[element[key]] = typeof obj[element[key]] === 'undefined' ? element : [].concat(obj[element[key]], element);
		}
	}
	return obj;
};

export const keyToValue = object => {
	const data = {};
	for (const key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			const element = object[key];
			data[element] = key;
		}
	}
	return data;
};
