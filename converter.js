const blobToBase64 = async blob => {
	const reader = new FileReader();
	reader.readAsDataURL(blob);
	return new Promise(resolve => {
		reader.onloadend = () => {
			resolve(reader.result);
		};
	});
};

const convertAudioFile = await blobToBase64(element)
	.then((res) => {
		return res;
	})

function urlToFile(url, filename, mimeType){
	return (fetch(url)
		.then(function(res){return res.arrayBuffer();})
		.then(function(buf){return new File([buf], filename,{type:mimeType});})
	);
}
const getAudioFile = await urlToFile(convertAudioFile, 'new-file.mp3','audio/mp3')
	.then(function(file){
		return file;
	});

console.log(getAudioFile)
