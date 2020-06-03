module.exports = function (value) {
	value = value.replace(/%/g, "%25");
	value = value.replace(/&/g, "%26");
	value = value.replace(/\$/g, "%24");
	value = value.replace(/@/g, "%40");
	value = value.replace(/'/g, "%27");
	value = value.replace(/;/g, "%3B");
	value = value.replace(/\?/g, "%3F");
	value = value.replace(/\*/g, "%2A");

	return value;
};