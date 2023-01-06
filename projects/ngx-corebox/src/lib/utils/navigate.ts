export function navigate(url: any, router: any) {
    if (url.includes('http')) {
        location.href = url;
    } else {
        router.navigate([url]);
    }
}