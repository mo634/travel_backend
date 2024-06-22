import OurServices from '../models/our-services.model.js';

// Controller to handle creating a new service
export const createService = async (req, res) => {
    const { title, description } = req.body;

    try {
        const newService = new OurServices({ title, description });
        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller to handle fetching all services
export const getAllServices = async (req, res) => {
    try {
        const services = await OurServices.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller to handle deleting a service by ID
export const deleteService = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedService = await OurServices.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};