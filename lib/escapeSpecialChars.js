module.exports = function (value) {
	return value.replace(/[%&$@';?*]/g, (c) => "%" + c.charCodeAt(0).toString(16));
};