data=$(cat ./site/_data/urls.json)
domain=$(echo $data | jq -r '.domain')
redirects=$(echo $data | jq -r '.redirects')
lookup_md="# Redirects\\n\\n"

for redirect in $(echo "${redirects}" | jq -r '.[] | @base64'); do
	slug=$(echo ${redirect} | base64 --decode | jq -r '.slug')
	url=$(echo ${redirect} | base64 --decode | jq -r '.url')
	lookup_md="${lookup_md}<details>\n<summary><strong>${slug}</strong> → ${url}</summary>\n\n[${domain}/${slug}](${domain}/${slug})\n\n![QR code for ${slug}](./site/src/img/qr_codes/${slug}.png)\n\n</details>\n"

	if [ -f "site/src/img/qr_codes/${slug}.png" ]; then
		echo "QR code for ${slug} already exists"
		continue
	fi

	npx qrcode "${domain}/${slug}" -o "site/src/img/qr_codes/${slug}.png"
done

echo $lookup_md > lookup.md
