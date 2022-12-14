import { Request, Response } from "express"

const authController = {
	getAuthControllerStatus: async(req: Request, res: Response) => {
		return res.status(200).json({
			success: true,
			details: "Live @ production! v2"
		})
	}
}

export default authController