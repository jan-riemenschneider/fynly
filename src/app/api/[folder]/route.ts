import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  secure: true,
})

export async function GET(
  request: Request,
  { params }: { params: Promise<{ folder: string }> }
) {
  try {
    const { folder } = await params
    const result = await cloudinary.api.resources_by_asset_folder(folder)

    console.log(result)
    const urls = result.resources.map(url => ({
      src: url.secure_url,
    }))

    return Response.json(urls)
  } catch (error) {
    console.error('Error:', error)
    return Response.json({ error: 'Failed to fetch images' }, { status: 500 })
  }
}
